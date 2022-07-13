import axios from 'axios';
import {useQuery} from 'react-query'
import { Link } from 'react-router-dom';

type Repository = { 
  id: string;
  amount: string;
  user_description: string;
}


export function Repos() {
  
    const {data, isFetching} = useQuery<Repository[]>('repos', async () =>{
    
    const response = await axios.get('https://financeiro.fintera.com.br/entities/34309/deposit_accounts/124784/financial_transactions', {
      headers: {
        'accept': 'application/json',
        'content-type': 'text/json',
        'account_id': '30376'
      },
      auth: {
          username: '90f649a81617ab9a75d538b5909034126d57bb286c68583a',
          password: 'X'
      }
    })
    return response.data;
  }) 
  
  return (
    <ul>
      { isFetching && <p>Carregando...</p> }
      {data?.map(repo =>{
        return(
          <li key={repo.id}>
            <Link to={'repos/${repo.id}'}>
              {repo.amount} 
            </Link>
            <p>{repo.user_description}</p>
          </li>
        )
      })}

    </ul>
  )
}