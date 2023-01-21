import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import FoodDataService from "../services/book.services";

const FoodsList = ({ getFoodId }) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    const data = await FoodDataService.getAllFoods();
    console.log(data.docs);
    setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await FoodDataService.deleteFood(id);
    getFoods();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getFoods}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.price}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getFoodId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default FoodsList;