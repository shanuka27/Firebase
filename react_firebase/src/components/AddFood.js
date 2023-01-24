import { useState, useEffect} from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup} from "react-bootstrap"
import FoodDataService from "../services/food.services"


const AddFood = (id, setFoodId) => {
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [status, setStatus] = useState("Available")
    const [flag, setFlag] = useState(true)
    const [message, setMessage] = useState({error: false, msg:""})

    const handleSubmit = async(e) => {
        e.preventDefault()
        setMessage("")
        if(title ==="" || price ===""){
            setMessage({error: true, msg: "All fields are mandatory!!"})
            return;
        }

        const newFood = {
            title,
            price,
            status
        }
        console.log(newFood)
    

    try {
      if (id !== undefined && id !== "") {
        await FoodDataService.updateFood(id, newFood);
        setFoodId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await FoodDataService.addFoods(newFood);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setPrice("");
  }

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await FoodDataService.getFood(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setPrice(docSnap.data().price);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

    return(
        <>
            <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formFoodTitle">
            <InputGroup>
              <InputGroup.Text id="formFoodTitle">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Food Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup> 
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFoodPrice">
            <InputGroup>
              <InputGroup.Text id="formFoodPrice">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
        </>
    )

            }
export default AddFood