import { ErrorMessage } from "../../error";
import { Loader } from "../../loading/style";
import { Card } from "../card"
import * as Styled from "./styles"
export const GeneralData = ({data, error, loading,}) =>{

    if (error) {
        return <ErrorMessage msg="Error on load General Data" />;
    }

    if (loading) {
        return (
            <Styled.Holder>
                <Loader />
            </Styled.Holder>
        );
    }

    if (data) {
        return(
            <Styled.Holder>
                <Styled.Title>General Data</Styled.Title>
                <Styled.CardHolder>
                    <Card title="CPMM Goal" value={data.general.CPMM_Goal} color='1'></Card>
                    <Card title="CIPMM Goal" value={data.general.CIPMM_Goal}color='2'></Card>
                    <Card title="Total Miles" value={data.general.Total_Miles} color='3'></Card>
                    <Card title="Total Crashes" value={data.general.Total_Crashes} color='4'></Card>                             
                </Styled.CardHolder>

            </Styled.Holder>
        )
    }
}