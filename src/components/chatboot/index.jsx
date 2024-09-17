import React, { useState, useEffect } from 'react';
import * as Styled from './styles'; // Ajuste o caminho conforme necessário
import Groq from 'groq-sdk';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SendIcon from '@mui/icons-material/Send';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import Flag from 'react-world-flags';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const groq = new Groq({ apiKey:import.meta.env.VITE_GROQ_KEY, dangerouslyAllowBrowser: true });

export const ChatBoot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [completion, setCompletion] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [baseData, setBaseData] = useState(null); 
  const [country, setCountry] = React.useState("US");

  const greetingText = (language) => {
    const textMap = {
      'US': `Hi, I'm Cepa Assistant! I'll help you with questions about this dashboard.`,
      'ES': '¡Hola, soy el Asistente Cepa! Te ayudaré con preguntas sobre este dashboard.',
      'BR': 'Olá, sou o Assistente Cepa! Vou ajudar você com perguntas sobre este dashboard.',
    };
    return textMap[language] || null; 
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    if (isOpen) {
      setCompletion('');
      setQuestion('');
      setError(null);
    }
  };

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const fetchBaseData = async () => {
    try {
      const response = await fetch('mock.json');
      const data = await response.json();
      setBaseData(data);
    } catch (error) {
      console.error('Error fetching base data:', error);
      setError('An error occurred while fetching base data.');
    }
  };

  useEffect(() => {
    fetchBaseData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const dataToSend = baseData ? JSON.stringify(baseData) : 'No base data available';
      const response = await groq.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `You are my data analyst dashboard assistant now. Based on this data (${dataToSend}), Just answer with the information, Be polite in your answer. The answer must be on the language ${country},  the question is: ${question}.  if the question is not about the data, send a message: 'This question is not about this dashboard.'`,
          },
        ],
        model: 'llama3-8b-8192',
      });

      setCompletion(response.choices[0]?.message?.content || 'No response from the model.');
      setQuestion('');
    } catch (error) {
      console.error('Error fetching chat completion:', error);
      setError('An error occurred while fetching the chat completion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Styled.Holder isOpen={isOpen}>

      <Styled.ToggleButton onClick={toggleChat}>
        {isOpen ? <CloseFullscreenIcon /> : <SmartToyIcon />}
      </Styled.ToggleButton>
      <Styled.WelcomeMessage isOpen={isOpen}>
        <Styled.Language>
          <Select
            sx={{
              width: 100,
              height: 50,
              '.MuiSelect-select': {
                display: 'flex',
                alignItems: 'center',
              },
              '.MuiSelect-icon': {
                color: 'black',
              },
            }}
            id="demo-simple-select"
            value={country}
            label="Language"
            onChange={handleChange}
            renderValue={(selected) => (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Flag code={selected} style={{ width: 50, height: 30 }} />
              </div>
            )}
          >
            <MenuItem value="US">
              <Flag code="US" style={{ width: 50, height: 30 }} />
            </MenuItem>
            <MenuItem value="ES">
              <Flag code="ES" style={{ width: 50, height: 30 }} />
            </MenuItem>
            <MenuItem value="BR">
              <Flag code="BR" style={{ width: 50, height: 30 }} />
            </MenuItem>
          </Select>
        </Styled.Language>
        {greetingText(country)} <SmartToyIcon />
      </Styled.WelcomeMessage>
      {isOpen && (
        <form onSubmit={handleSubmit}>
          <Styled.TextBox
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="...."
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending.......' : <SendIcon />}
          </button>
          {completion && !loading && (
            <div>
              <p><TipsAndUpdatesIcon /> {completion}</p>
            </div>
          )}
          {error && <div>{error}</div>}
        </form>
      )}
    </Styled.Holder>
  );
};
