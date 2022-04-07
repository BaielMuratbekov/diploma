import "./Card.css"
import RealF1 from "../../assets/realforma1.jpg"
import Juventus from "../../assets/juventus1.jpg"
import Psg from "../../assets/psg.jpg"
import Mu from "../../assets/ManchesterUnited.jpg"
function Card() {
	return (
		<main>
			<div className="card__title">All goods</div>

			<div className="container">
				<div className="Cards">
					<div className="card">
						<img src={RealF1} alt="goods" />
						<p>Real Madrid</p>
						<div className="card__item">
							<div className="price">
								<span>Price:</span>
								<b>1200$</b>
							</div>
							<div>
								<button className="like">
									<i class="fa-regular fa-heart"></i>
								</button>
								<button>
									<i class="fa-light fa-plus"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="card">
						<img src={Juventus} alt="goods" />
						<p>Juventus</p>
						<div className="card__item">
							<div className="price">
								<span>Price:</span>
								<b>1200$</b>
							</div>
							<div>
								<button className="like">
									<i class="fa-regular fa-heart"></i>
								</button>
								<button>
									<i class="fa-light fa-plus"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="card">
						<img src={Psg} alt="goods" />
						<p>PSG</p>
						<div className="card__item">
							<div className="price">
								<span>Price:</span>
								<b>1200$</b>
							</div>
							<div>
								<button className="like">
									<i class="fa-regular fa-heart"></i>
								</button>
								<button>
									<i class="fa-light fa-plus"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="card">
						<img src={Mu} alt="goods" />
						<p>Manchester United</p>
						<div className="card__item">
							<div className="price">
								<span>Price:</span>
								<b>1200$</b>
							</div>
							<div>
								<button className="like">
									<i class="fa-regular fa-heart"></i>
								</button>
								<button>
									<i class="fa-light fa-plus"></i>
								</button>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</main>
	)
}

export default Card;