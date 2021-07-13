import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

const Card = () => {

    const [people, setPeople] = useState(reviews);
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;

    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            //Comprobando si estoy en el inicio del array o al final
            return checkNumber(newIndex);
        });
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const randomPerson = () => {
        let random = Math.floor(Math.random() * people.length);
        setIndex((index) => {
            index = random;
            let newIndex = index;
            return checkNumber(newIndex);
        })
    }

    return (
        <article className="review">
            <div className="img-container">
                <img className="person-img" src={image}></img>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>

            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>

            <div className="button-container">
                <button className="prev-btn" onClick={() => prevPerson()}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={() => nextPerson()}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={() => randomPerson()}>Random worker</button>
        </article>
    )
}

export default Card
