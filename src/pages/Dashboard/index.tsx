import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://github.com/guilhermeorcezi.png"
          alt="Guilherme Orcezi"
        />
        <div>
          <strong>Rockeseat/Unform</strong>
          <p>Easy pesy highly scalable ReactJS and React Native Forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
    <Repositories>
      <a href="teste">
        <img
          src="https://github.com/guilhermeorcezi.png"
          alt="Guilherme Orcezi"
        />
        <div>
          <strong>Rockeseat/Unform</strong>
          <p>Easy pesy highly scalable ReactJS and React Native Forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
    <Repositories>
      <a href="teste">
        <img
          src="https://github.com/guilhermeorcezi.png"
          alt="Guilherme Orcezi"
        />
        <div>
          <strong>Rockeseat/Unform</strong>
          <p>Easy pesy highly scalable ReactJS and React Native Forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
