import React from "react";

const Cards = ({ item }) => {
    return (
        <div className="mt-4 my-3  p-3 z-0">
            <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure>
                    <img src={item.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}

                        <div className="badge badge-secondary">
                            {item.category}
                        </div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="cursor-pointer badge badge-outline px-2 hover:bg-pink-500 hover:text-white duration-200">
                            BuyNow
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
