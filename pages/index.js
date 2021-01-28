import styled from 'styled-components';
import Head from 'next/head'

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';


/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;
 */
// Verificar

export const QuizContainer = styled.div`
  width:100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return  (
    
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>
        Alura Quiz - Imersão REACT
        </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
          <Widget>
             <Widget.Header>
               <h1>Quiz</h1>
               </Widget.Header>           
               <Widget.Content>
               <p>info info info!!!!!</p>
               </Widget.Content>
               </Widget>

              <Widget>
              <Widget.Header>
              <h1>More Things!!!!</h1>
              </Widget.Header>  
              <Widget.Content>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ante magna.
                 Duis tincidunt pellentesque sollicitudin. 
                Donec interdum magna a sagittis pretium</p>
            </Widget.Content>
          </Widget>
          <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/phpdevroot"/>
    </QuizBackground>
    
  );
}
