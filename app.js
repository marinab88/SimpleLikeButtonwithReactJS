// to declare a component in React:
// * define a class (old school)
// * define a function (new approach)

// * use JSX instead

// <button>Like</button>

let like = false

// Like Button Component definition
const LikeButton = () => {

  const clickHandler = () => {
    like = !like
  
    console.log( like ? "You've liked this" : "You've unliked this")
  }

  // returns visual representation of the component
  // return React.createElement('button', null, 'Like')
  return (
    <button onClick={clickHandler}><Icon /> Like</button>
  )
} 

const Icon = () => {
  return (
    <i class="fa-solid fa-thumbs-up"></i>
  )
}


// render our component in the div#root
let root = ReactDOM.createRoot(document.getElementById('root'))
// let rootFooter = ReactDOM.createRoot(document.getElementById('footer'))

root.render(
  // React.createElement(LikeButton, null)
  [<LikeButton />/*, <LikeButton />*/]
  )

  // rootFooter.render(
  //   <LikeButton />
  //   )

  /*
  
  [APP] ---> React (virtual DOM) ----> DOM (real)
        <--- React (virtual DOM) <----
  
  */