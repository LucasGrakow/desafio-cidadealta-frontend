import * as S from './styles';
import { useState } from 'react';
import { gamesData } from '../data';
import { GamesInterface } from '../interfaces';
import Modal from '../components/gameModal';
import GameCard from '../components/gameCard';

function App() {
	const [selectedGame, setSelectedGame] = useState<GamesInterface>();
	const [seed, setSeed] = useState(1);
	const resetRanking = () => {
		localStorage.clear();
		setSeed(Math.random());
	}

	return (
		<S.Main>
			<S.Wrapper key={seed}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 798 69" className="frame">
					<path fill="#2E334E" d="M789.291 63.762c-.134.485-.222.97-.356 1.441-.222.986-1.421 1.472-4.219 1.472-12.658-.015-25.361-.015-38.019-.152-11.991-.121-23.983-.41-35.975-.607-28.647-.485-57.294-.82-85.942-.561-17.366.151-32.271-1.829-49.637-1.419-18.965.44-37.841 1.047-56.761 1.578-14.968.425-30.82-1.138-45.788-.728-14.035.379-28.069.713-42.149 1.031-17.632.395-36.601-.333-54.277.016-9.239.182-18.521.318-27.759.41-29.669.288-59.382.606-89.051.788-41.35.258-82.655.41-124.004.607-20.609.106-41.217.304-61.87.35-7.816.014-15.677-.304-23.494-.365-5.552-.046-11.104.015-16.7.091-5.463.06-10.926.258-16.433.288-8.262.03-12.747-1.123-14.702-3.854-2.62-3.61-2.265-7.313-1.91-10.985.4-4.521.844-9.043 1.377-13.565C2.2 34.591 3.132 29.6 3.4 24.592c.31-5.72-.045-11.44 0-17.16 0-1.366-.577-2.717 1.554-4.067 1.821-1.153 4.131-1.715 7.773-1.73 13.324-.076 26.693-.076 40.017-.212 19.01-.197 37.974-.47 56.984-.728 42.993-.607 86.03-.896 129.067-.531 33.178.273 66.355.773 99.533 1.046 33.666.289 67.332.456 100.998.607 38.862.182 77.769.304 116.631.47 38.329.168 76.615.456 114.944.456 23.939 0 47.834-.41 71.729-.713 13.68-.167 27.359-.5 41.039-.759 5.596-.106 7.906.304 9.46 2.17 1.332 1.578 2.532 3.217 2.62 4.84.4 5.872.4 11.76.311 17.631-.044 2.58-1.243 5.16-1.11 7.739.133 3.034 1.093 11.508 1.492 14.528.667 4.673 1.066 9.362 1.555 14.035.089.865-1.244 1.305-3.731 1.38-1.51.046-3.109.107-4.974.168M393.533 3.88v.137c-41.838 0-83.632-.076-125.47.015-61.78.121-123.56.394-185.34.53-22.607.046-45.214-.105-67.82-.166-1.156 0-2.266.015-3.42.045-1.733.03-2.355.304-2.31.926.4 3.611.755 7.237.888 10.849.444 11.835 2.354 23.624 6.529 35.368 1.022 2.868 3.065 5.705 5.152 8.512 1.288 1.76 4.308 3.262 9.238 4.127 6.307 1.108 13.013 1.73 20.209 1.578 16.966-.38 33.976-.774 50.943-1.107 21.541-.41 43.037-.85 64.578-1.123 26.649-.35 53.342-.562 79.99-.79 32.733-.287 65.422-.485 98.155-.788 24.117-.228 48.19-.546 72.307-.835.977-.015 3.601.456 4.578.35 1.643-.168 3.02.014 4.664 0 17.41-.213 34.776-.365 52.186-.547 28.248-.319 57.424 1.441 85.671 1.032 25.761-.38 49.06 1.358 74.865.948 20.386-.318 40.817-.592 61.247-.698 27.226-.121 54.497-.076 81.723-.06 2.487 0 3.331-.258 3.331-1.078 0-1.032.311-2.063.533-3.095.888-4.02 2.016-13.497 2.86-17.533.488-2.382 1.51-4.78 1.066-7.146-1.288-6.995-2.887-13.974-4.975-20.939-.666-2.306-2.975-4.582-4.885-6.828-.977-1.183-3.687-1.669-7.462-1.623-9.726.121-19.498.167-29.224.212-26.382.137-52.764.228-79.191.41-33.31.212-66.577.258-99.888-.107-26.959-.303-53.918-.455-80.878-.546-29.89-.106-59.87-.03-89.85-.03M109.016 66.136c0 .046-.044.106-.044.152h1.643c18.743-.122 37.441-.243 56.184-.35 38.196-.212 76.437-.363 114.633-.636 25.227-.183 50.499-.486 75.726-.774 11.726-.137 23.406-.35 35.132-.562 11.059-.197 23.41.683 34.469.44 10.793-.242 21.541-.546 32.689-.834-.533-.06-.711-.091-.889-.091-18.92.167-39.132-.774-58.052-.577-19.765.197-39.485.486-59.249.668-31.756.288-63.557.516-95.313.774-17.011.136-34.021.242-51.076.44-17.677.197-35.354.455-52.987.728-11.014.167-21.94.41-32.866.622m-78.258.273c.089-.121.178-.258.311-.38-4.441-.743-8.483-1.683-10.615-3.216-2.043-1.441-3.953-2.959-5.019-4.506-4.53-6.494-5.374-13.155-6.973-19.786-.355-1.548-.755-3.08-1.11-4.628a85 85 0 0 0-1.777 10.955c-.4 4.522-.888 9.043-.8 13.565.045 1.881 1.022 3.793 2.221 5.644 1.11 1.715 3.909 2.322 9.061 2.337 4.886.03 9.816.015 14.701.015M62.736 3.031c78.569-.227 157.138-.455 232.331-.683-75.238-1.395-153.806-.819-232.33.683m729.282 17.662c.088-.668.266-1.335.266-2.003-.089-2.23 0-4.461-.444-6.676-.533-2.504-1.244-5.007-2.443-7.48-.888-1.791-3.242-2.095-8.305-1.533 10.304 5.402 8.483 11.698 10.926 17.692m-41.812 43.084c3.02.334 6.529-.107 6.529 1.365h27.537c.177-.53.311-.925.488-1.365zm42.549-12.73H792c-.755 3.671-1.51 7.359-2.265 11.03 3.908.167 3.953.152 3.908-.986-.044-.743-.044-1.487-.133-2.23-.266-2.61-.489-5.22-.755-7.814m-101.62 12.972c.222.03.267.046.267.046 16.522.288 33.044.561 49.566.85-16.389-1.396-33-.987-49.833-.896"></path>
				</svg>
				<S.GamesWrapper>                
					{gamesData.map((item) => 
						<GameCard game={item} onSelect={setSelectedGame}/>
					)}
				</S.GamesWrapper>

				<Modal 
					selectedGame={selectedGame}
					setSelectedGame={setSelectedGame}
				/>
			</S.Wrapper>
			<S.ResetRankingButton className='resetRanking' onClick={resetRanking}>Resetar Ranking</S.ResetRankingButton>
		</S.Main>
	);
}

export default App;