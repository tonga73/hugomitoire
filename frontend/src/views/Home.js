import React from "react";

import Carousel from "../features/carousel/Carousel";
import Card from "../features/card/Card";
import Banner from "../features/banner/Banner";

import { ParticlesDefault } from "../commons/utils/particles/ParticlesDefault";

export default function Home() {
  const list = [
    {
      content:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-46e27bb5bb18d1354f5acc1d96454f60_screen.jpg?ts=1637015775",
      background:
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      content:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sci-fi-book-cover-template-a1ec26573b7a71617c38ffc6e356eef9_screen.jpg?ts=1636980113",
      background:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5",
    },
    {
      content:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198",
      background:
        "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg",
    },
  ];

  const cards = [
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773",
    "https://i.pinimg.com/originals/f5/da/90/f5da901de158988c7825960c669c0078.jpg",
    "https://t3.ftcdn.net/jpg/02/41/39/54/360_F_241395416_8RxWRj2Awl6nagPtU0PGeP6bac7fklIj.jpg",
    "https://i.pinimg.com/originals/f5/da/90/f5da901de158988c7825960c669c0078.jpg",
    "https://t3.ftcdn.net/jpg/02/41/39/54/360_F_241395416_8RxWRj2Awl6nagPtU0PGeP6bac7fklIj.jpg",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773",
  ];

  return (
    <>
      <div className="col-span-12 z-10">
        <Carousel backgroundImage={list.map((i) => i.background)}>
          {list.map((i) => i.content)}
        </Carousel>
      </div>
      <div className="col-span-12 md:gap-y-20 py-5 container mx-auto grid grid-cols-2">
        <div className="z-10 lg:col-span-1 md:col-span-2 grid gap-y-7 lg:grid-cols-3 md:grid-cols-3">
          {cards.map((i, index) => {
            return (
              <Card key={index}>
                <img src={i} alt="" className="h-64" />
              </Card>
            );
          })}
        </div>
        <div className="z-10 lg:col-span-1 md:col-span-2 grid md:gap-y-3">
          <Banner />
          <Banner />
          <Banner />
        </div>
        <ParticlesDefault />
      </div>
    </>
  );
}
