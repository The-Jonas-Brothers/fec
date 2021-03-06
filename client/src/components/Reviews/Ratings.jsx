import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacteristicBar from './ratingComponents/CharacteristicBar.jsx';
import RatingBar from './ratingComponents/RatingBar.jsx';
import StarRating from './ratingComponents/StarRating.jsx';
import {
  RatingAndStarsContainer,
  DisplayText
} from '../style/ReviewAndRatingStyle/RatingsStyle.js'

const Ratings = ({ characteristics, ratings, recommended, setDisplayRatingFilter, displayRatingFilter}) => {
  let [displayRating, setDisplayRating] = useState(0);
  let [displayText, setDisplayText] = useState(0);
  let [recommendedRating, setRecommendedRating] = useState(0)

  useEffect(() => {

    let starRating = Object.keys(ratings);
    let total = 0;
    let starTotal = 0;
    for (let stars of starRating) {
      total += parseInt(ratings[stars], 0);
      starTotal += ratings[stars] * stars;
    }
    let number = (Math.round((starTotal / total) * 4) / 4).toFixed(2);
    setDisplayRating(number);
    let recommendedAverageDisplay = Math.round(number * 10) / 10;
    setDisplayText(recommendedAverageDisplay);

    let recommendYes = parseInt(recommended.true);
    let recommendNo = parseInt(recommended.false);
    let recTotal = recommendNo + recommendYes;
    let recommendedAverage = Math.round((recommendYes / recTotal * 100).toFixed(3));
    setRecommendedRating(recommendedAverage);

  })

  return (
    <div>
      <RatingAndStarsContainer>
        <DisplayText>{displayText}</DisplayText>
        <div>
          {StarRating(displayRating)}
        </div>
      </RatingAndStarsContainer>
      <p style={{fontFamily:'Petrona'}}> {recommendedRating}% recommends this product</p>
      <div>
        <RatingBar data={ratings}
                   setDisplayRatingFilter={setDisplayRatingFilter}
                   displayRatingFilter={displayRatingFilter}/>
        <CharacteristicBar data={characteristics} />
      </div>
    </div>
  )

}

export default Ratings;