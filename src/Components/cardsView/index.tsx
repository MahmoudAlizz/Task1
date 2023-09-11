import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Item from "./item";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FetchCards } from "../../Reducers/cardsSlice";
const cardsView = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(FetchCards());
  }, []);
  const CardsData = useAppSelector((state) => state.Cards.data);
  const error = useAppSelector((state) => state.Cards.error);
  const loading = useAppSelector((state) => state.Cards.loading);
  const countCards = CardsData.length;
  const [nowCards, setNowCards] = useState([0, 9]);
  if (loading) {
    return <p className="text-center text-light">Loading</p>;
  }
  if (error != "") {
    return <p className="text-center text-danger">{error}</p>;
  }
  return (
    <div className="d-flex mx-3 mt-5">
      <a
        href="#"
        onClick={() => {
          if (nowCards[0] == 0) {
            return null;
          }
          setNowCards([nowCards[0] - 10, nowCards[1] - 10]);
        }}
        className="align-self-center "
      >
        <span className="carousel-control-prev-icon"></span>
      </a>

      <div className="container my-4">
        <div className="row justify-content-center mx-2">
          {CardsData.map((item, index) => {
            if (index >= nowCards[0] && index <= nowCards[1]) {
              return (
                <Fragment key={index}>
                  <Item
                    learn={item.learn}
                    lang={item.lang}
                    about={item.about}
                    read={item.read}
                  />
                </Fragment>
              );
            }
          })}
        </div>
      </div>
      <a
        href="#"
        onClick={() => {
          if (nowCards[1] >= countCards) {
            return null;
          }
          setNowCards([nowCards[0] + 10, nowCards[1] + 10]);
        }}
        className="align-self-center"
      >
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
};
export default cardsView;
