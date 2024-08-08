import { useSelector } from 'react-redux'
import yardsalesign from '../assets/images/yardsalesign.jpg'

const Home = () => {
  let name = useSelector(state => state.auth.userInfo.username)

  return (
    <div className='home'>
      <h1 >Welcome {name}</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, totam accusamus, autem, nesciunt voluptate consectetur repellat beatae excepturi accusantium quibusdam maxime? Quisquam placeat ex, vel, laboriosam aperiam necessitatibus aspernatur perspiciatis atque quibusdam iste ipsam cumque velit nostrum nesciunt tempora porro voluptas? Amet reiciendis ab dolores. Exercitationem voluptatem ipsa dolores voluptas reiciendis eligendi quas nesciunt perspiciatis ab deleniti. Quo quod velit totam tempora, ad natus. Provident dicta consequuntur facere tempora deserunt corporis nihil, quia architecto quam amet. Eum sequi sed minima earum, nihil laudantium nemo? Laborum, est quaerat aliquam eius, quis iste odio autem expedita labore aperiam suscipit aut voluptates repellendus. </h4>
      <div className='center'>
      <a id='clicktoenter' href='/yardsale'>
        <img src={yardsalesign} alt='sign' id='sign'/></a>
      </div>
    </div>
  )
}

export default Home