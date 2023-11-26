/*eslint-disable */
import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import axios from 'axios';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import MoreDetail from './MoreDetail';
const DetailPage = ({ fetchData, setFetchData }) => {



  const [selectedItems, setSelectedItems] = useState([]);
  const [likeItems, setLikeItems] = useState([]);


  // 체크박스 변경 시 호출되는 함수
  const handleCheckboxChange = (productId) => {
    const isSelected = selectedItems.includes(productId);

    setSelectedItems((prevSelected) => {
      if (isSelected) {
        return prevSelected.filter((id) => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  const regercy = () => {
    console.log(selectedItems);
    const newLikeItems = [];

    // selectedItems와 fetchData에서 일치하는 아이템을 찾아 likeItems에 추가
    selectedItems.forEach((selectedItemId) => {
      const selectedProduct = fetchData.find((item) => item.id === selectedItemId);
      if (selectedProduct) {
        newLikeItems.push(selectedProduct);
      }
    });

    setLikeItems(newLikeItems);
  };

  // selectedItems가 변경될 때마다 regercy 함수 호출
  useEffect(() => {
    regercy();
  }, [selectedItems]);


  /**관심품목에 totalprice 를 구해주는 함수 */
  const getTotalPrice = () => {
    return likeItems.reduce((total, item) => total + item.price, 0);
  };


  return (
    <Container style={{ marginTop: "30px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", alignItems: "center" }}>
        {fetchData.map((item) => (
          <div key={item.id} style={{ textDecoration: "none", color: "#000" }}>
            <div key={item.id}>
              <Link to={`/MoreDetail/${item.id}`} style={{ textDecoration: 'none', color: "#000" }}>
                <img src={`${"https://test.api.weniv.co.kr/"}${item.thumbnailImg}`} style={{ width: "300px", height: "300px", backgroundPosition: "center", border: "1px solid", boxSizing: "border-box", borderRadius: "10px" }} alt={item.productName} />
              </Link>
              <div>{item.id}</div>
              <div>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'KRW' })}원</div>
              <label style={{ fontSize: "1rem" }}>관심</label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(item.id)}
                checked={selectedItems.includes(item.id)}
              />
            </div>
          </div>
        ))}
      </div>



      <div className='관심품목' >
        <p style={{ padding: '10px ' }}>관심품목</p>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none", flexDirection: "column" }}>
          {likeItems.map((likeItem) => (
            <div key={likeItem.id}>
              <li style={{ padding: "10px", backgroundColor: "#3296FF", width: "fit-content", color: " white", borderRadius: "10px" }}>{likeItem.productName}</li>
              <li>{likeItem.price}</li>
            </div>
          ))}
          <div>{likeItems.length > 0 ? (
            <div className='hover-element'>TOTAL : {getTotalPrice()} 원</div>
          ) : <div></div>}</div>
        </ul>


      </div>
    </Container>
  );
};

export default DetailPage;
