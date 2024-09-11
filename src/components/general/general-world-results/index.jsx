import React from 'react';
import { ErrorMessage } from '../../error';
import { Loader } from '../../loading/style';
import * as Styled from './styles';

export const WorldResults = ({ data, error, loading }) => {

    if (error) {
        return <ErrorMessage msg="Error on load World Results" />;
    }

    if (loading) {
        return (
            <Styled.Holder>
                <Loader />
            </Styled.Holder>
        );
    }

    if (data) {
        return (
            <Styled.Holder>
                <Styled.Title>World Results</Styled.Title>
                <Styled.Description>
                    <Styled.Info $bg={true}>
                        <h4>CPMM YTD (crashes per million miles)</h4>
                        <span>{data.general.CYTD_CPMM}</span>
                    </Styled.Info>

                    <Styled.Info $bg={true}>
                        <h4>CIPMM YTD (injuries per million miles - Crashes with employee injured)</h4>
                        <span>{data.general.CYTD_CIPMM}</span>
                    </Styled.Info>

                    <Styled.Info $bg={false}>
                        <h4># of vehicles</h4>
                        <span>{data.general.CYTD_CPMM}</span>
                    </Styled.Info>

                    <Styled.Info $bg={false}>
                        <h4>Average monthly miles per vehicle</h4>
                        <span>{data.general.CYTD_CPMM}</span>
                    </Styled.Info>

                    <div>
                        <p>% Veh. in Crashes (annualized projection)</p>
                        <p>of Crashes with injuries (only employee)</p>
                    </div>
                </Styled.Description>
            </Styled.Holder>
        );
    }

};
