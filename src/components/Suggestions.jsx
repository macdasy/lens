import { experimentalStyled as styled } from "@mui/material/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

// import { one, two, three, four } from './assets/1.jpeg';
// const images = [
//   "https://cdn.dribbble.com/users/228922/screenshots/17318708/media/3a75ec1303bd227b27a48c5ae1938caf.jpg?compress=1&resize=400x300",
//   "https://static.vecteezy.com/system/resources/thumbnails/006/897/417/small_2x/sunglasses-icon-illustration-glasses-flat-cartoon-style-suitable-for-web-landing-page-banner-flyer-sticker-wallpaper-background-free-vector.jpg",
//   "https://cdn.dribbble.com/users/1815484/screenshots/5063996/media/0201d49f08ff0dd7995ceb99cb5cefb1.png?compress=1&resize=400x300&vertical=top",
//   "https://us.123rf.com/450wm/anisimovfedor/anisimovfedor1909/anisimovfedor190900040/131588460-modern-glasses-icon-vector-illustration-of-elegance-spectacles-in-black-frame-eyeglasses-with-lense.jpg?ver=6",
//   "https://static.vecteezy.com/system/resources/previews/006/066/813/original/cartoon-isolated-yellow-sunglasses-illustration-vector.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliGJefLSj3D0C5rGhsZaw9waqTlc3Y3FCEaULEhv1-AclmNmQTUEkW7wHL_Ud1akUo7U&usqp=CAU",
// ];

export default function Suggestions(props) {
  const name = props.name;
  const type = props.shape;

  return (
    <section id="suggestion">
      <div style={{ textAlign: "left", marginBottom: "5%" }}>
        <h3 style={{ margin: "0", paddingBottom: "1%" }}> Welcome, {name} </h3>
        <p style={{ color: "blue", margin: 0 }}>
          Here are the top picks for you!{" "}
        </p>
        <p style={{textAlign:'right'}}> Shape : <span style={{color:'blue', fontWeight:'bold'}}> { type==='s' ? 'Square' : (type==='r' ? 'Round' : 'Oval') } </span>  </p>
      </div>

      <div style={{display:'flex', justifyContent:'center'}}>

      <ImageList sx={{ height: 350 }} cols={3}>
        { Array.from(Array(4)).map((_, index) => (
          <ImageListItem key={index}>
            <img
            //   style={{ pointerEvents:'none' }}
              src={require(`./assets/${type+(index+1)}.jpeg`)}
              alt="loading..."
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </div>
    </section>
  );
}

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Rounded",
//     featured: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Oval",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Loose",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//   },
// ];
