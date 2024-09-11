import { GeneralData } from "./general-card-data"
import { WorldResults } from "./general-world-results"
import {GENERAL_RESULTS} from '../../api/'
import {useFetch} from '../../hooks/useFetch'
import React from "react"
import * as Styled from './styles'

export const General = () =>{
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        function getData() {
          const { url, options } = GENERAL_RESULTS();
          request(url, options);
        }
        getData();
      }, [request]);
    
    return (
        <Styled.Holder >
            < WorldResults data={data} error={error} loading={loading}/>
            <GeneralData data={data} error={error} loading={loading} />
         </Styled.Holder>
    )
}
