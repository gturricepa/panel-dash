import WorldMap from "react-svg-worldmap";
import React, { useState, useEffect } from "react";
import * as Styled from './styles';
import { CPMMWorld } from "./cpmm-world";
import { CIPMMWorld } from "./cipmm-world";

export const Maps = () => {

    return (
        <Styled.Holder>
            <Styled.Title>
                World CPMM and CIPMM By Regions
            </Styled.Title>
            <Styled.Maps>
                <CPMMWorld />
                <CIPMMWorld />
            </Styled.Maps>A

        </Styled.Holder>
    );
}
