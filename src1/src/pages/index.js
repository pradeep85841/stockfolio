import React, { useEffect, useState } from 'react';
import HomeHead from '../components/homeHeader';
import News from '../components/news';

const Home = () => {


	const [news, setNews] = useState([]);
	useEffect(()=>{
		fetch("http://localhost:5000/posts")
		.then(res => res.json())
		.then((res) => {
			// this.setState({ news: res[0].data })
			console.log(res[0].data);
			console.log('res[0].data');
			setNews( res[0].data )
		})
		.catch(console.log)
	})
	

return (
	<div className='home'>
		<div>
			<HomeHead />
		</div>
		<News news = {news}/>
	{/* <h1>Welcome to stockfolio</h1> */}
	</div>
);
};

export default Home;
