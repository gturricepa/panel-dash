    import * as Styled from './styles'
    export const Scroll = () =>{
        const handleScroll = () =>{
            window.scrollTo({
            top: 0,
        });
        }
        return (
            <Styled.Scroll>
                <div onClick={handleScroll}>🔼</div>
             </Styled.Scroll>

        )
    }