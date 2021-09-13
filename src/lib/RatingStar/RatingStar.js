import React from 'react';
import ReactStars from "react-rating-stars-component";

const RatingStar = ( { value} ) => {
	return (
		<ReactStars
			count={ 5 }
			edit={false}
			value={4}
			half={ true }
			size={ 20 }
			activeColor="#ff4200"
		/>
	);
};

export default RatingStar;
