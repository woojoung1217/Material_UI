/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MoreDetail = ({ fetchData }) => {
  const { id } = useParams();

  // Use parseInt to convert id from string to number, as IDs are usually numbers
  const selectedItemId = fetchData.find((data) => data.id === parseInt(id, 10));

  if (!selectedItemId) {
    // Handle the case when the item with the specified ID is not found
    return <div>Item not found</div>;
  }

  return (
    <>
      <div>{selectedItemId.productName}</div>
      <div>{selectedItemId.price.toLocaleString('en-US', { style: 'currency', currency: 'KRW' })}원</div>
    </>
  );
};

export default MoreDetail;
