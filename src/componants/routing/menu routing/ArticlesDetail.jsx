import React from 'react'
import { useParams } from 'react-router-dom';
//Articles
import burger from "../../../assets/page 7/1.png"
import fries from "../../../assets/page 7/2.png"
import chicken from "../../../assets/page 7/3.png"
import cheesecake from "../../../assets/page 7/4.png"
import pizza from "../../../assets/page 7/5.png"

const articleCards = [
    {
        id: 1,

        name: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
        description: "Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
        date: "January 3,2023",
        img: burger
    },

    {
        id: 2,

        name: "How to prepare the perfect french fries in an air fryer",
        date: "January 3,2023",
        img: fries
    },

    {
        id: 3,

        name: "How to prepare delicious chicken tenders",
        date: "January 3,2023",
        img: chicken
    },

    {
        id: 4,

        name: "7 delicious cheesecake recipes you can prepare",
        date: "January 3,2023",
        img: cheesecake
    },

    {
        id: 5,

        name: "5 great pizza restaurants you should visit this city",
        date: "January 3,2023",
        img: pizza
    },

];

const ArticlesDetail = () => {

    const { id } = useParams();

    const article = articleCards.find((item) => item.id === parseInt(id));

    if (!article) {
        return <h1 className="text-center text-2xl font-bold text-red-500">Cards Not Found</h1>;
    }
    return (
        <>
            <img src={article.img} alt={article.name} />
            <div className="p-4">
                <p className="text-gray-500 text-sm">{article.date}</p>
                <h3 className="text-lg font-semibold mt-2">{article.name}</h3>
                {article.description && (
                    <p className="text-gray-600 mt-2 text-sm">{article.description}</p>
                )}
            </div>


        </>
    )
}

export default ArticlesDetail