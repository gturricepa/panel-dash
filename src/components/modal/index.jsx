import React, { useState } from 'react';
import * as Styled from './styles';
import { COUNTRY_BY_ID } from '../../api';
import { useFetch } from '../../hooks/useFetch';
import { ErrorMessage } from '../error';
import { Loading } from '../loading';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';

export const Modal = ({ show, onClose, id }) => {
    const { data, error, loading, request } = useFetch();
    const [selectedData, setSelectedData] = useState('CPMM'); // Estado para controlar a seleção de dados

    React.useEffect(() => {
        function getData() {
            const { url, options } = COUNTRY_BY_ID(id);
            request(url, options);
        }
        getData();
    }, [id, request]);

    const transformedData = data && data.CPMM && data.CIPMM
        ? Object.keys(data.CPMM).map((month) => ({
            month,
            CPMM: data.CPMM[month],
            CIPMM: data.CIPMM[month]
        }))
        : [];

    if (error) {
        return (
            <Styled.ModalOverlay $show={show} onClick={onClose}>
                <Styled.ModalContent onClick={e => e.stopPropagation()}>
                    <Styled.CloseButton onClick={onClose}>&times;</Styled.CloseButton>
                    <Styled.Content>
                        <ErrorMessage msg={error} />
                    </Styled.Content>
                </Styled.ModalContent>
            </Styled.ModalOverlay>
        );
    }

    if (loading) {
        return (
            <Styled.ModalOverlay $show={show} onClick={onClose}>
                <Styled.ModalContent onClick={e => e.stopPropagation()}>
                    <Styled.CloseButton onClick={onClose}>&times;</Styled.CloseButton>
                    <Styled.Content>
                        <Loading />
                    </Styled.Content>
                </Styled.ModalContent>
            </Styled.ModalOverlay>
        );
    }

    if (data) {
        return (
            <Styled.ModalOverlay $show={show} onClick={onClose}>
                <Styled.ModalContent onClick={e => e.stopPropagation()}>
                    <Styled.CloseButton onClick={onClose}>&times;</Styled.CloseButton>
                    <h2>{data.name} CPMM and CIPMM by months</h2>
                    <Styled.Content>
                        <BarChart width={800} height={400} data={transformedData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis yAxisId="left" orientation="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <Tooltip />
                            <Legend />
                            {selectedData === 'CPMM' && (
                                <Bar yAxisId="left" dataKey="CPMM" fill="#8884d8" />
                            )}
                            {selectedData === 'CIPMM' && (
                                <Bar yAxisId="right" dataKey="CIPMM" fill="#82ca9d" />
                            )}
                        </BarChart>
                        <Styled.Actions>
                            <Styled.Btn
                                active={selectedData === 'CPMM'}
                                onClick={() => setSelectedData('CPMM')}
                            >
                                CPMM
                            </Styled.Btn>
                            <Styled.Btn
                                active={selectedData === 'CIPMM'}
                                onClick={() => setSelectedData('CIPMM')}
                            >
                                CIPMM
                            </Styled.Btn>
                        </Styled.Actions>
                    </Styled.Content>
                </Styled.ModalContent>
            </Styled.ModalOverlay>
        );
    }

    return null; // Retorna null se não houver dados
};
