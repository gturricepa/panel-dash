    import * as Styled from './styles'
    import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
    export const Scroll = () =>{
        const handleScroll = () =>{
            window.scrollTo({
            top: 0,
        });
        }
        return (
            <Styled.Scroll>
                <div onClick={handleScroll}><ArrowCircleUpIcon /></div>
             </Styled.Scroll>

        )
    }