import { CPMMWorldEvolution } from "../world-cpmm-evolution"
import { CIPMMWorldEvolution } from "../world-ipmm-evolution"
import * as Styled from './styles'
export const CPMMIPMM = () =>{
    return (
        <Styled.Holder>
          <CPMMWorldEvolution />
          <CIPMMWorldEvolution />
        </Styled.Holder>
    )
}