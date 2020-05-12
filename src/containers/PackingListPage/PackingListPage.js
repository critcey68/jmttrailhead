import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { buildPackingList } from "../../store/PackingList/actions";

export default () => {
  const packingList = useSelector(state => state.packingList);
  const dispatch = useDispatch();

  const fetchPackingList = async() => {
      const response = await fetch('/packing_list');
      const body = await response.json();
      return body;
  };

  useEffect(() => {
    fetchPackingList().then(body => {
      console.log(body.data);
      dispatch(buildPackingList(body.data));
    })
    .catch((err) => {
      throw new Error(err);
    });
  }, [dispatch]);

  return (
    <main>
      <Link to="/">Home</Link>
      {packingList.map((item, index) =>
        <p key={index}>{item.name}</p>
      )}
    </main>
  );
};
