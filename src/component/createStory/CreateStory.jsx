import React,{useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createStoryAsync } from '../../services/action/storyAction'
import '../createStory/createstory.css'

function CreateStory() {
    const dispatch = useDispatch()

    const [initial, setInitial] = useState({
        title: "",
        designation: ""
    })

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setInitial({ ...initial, [name]: value })
    }
    const handleSubmit = (e) => {

        e.preventDefault()
        dispatch(createStoryAsync(initial))
        setInitial({
            title: "",
            designation: ""
        })
        console.log(e);
    }
    return (
        <div className='form-wrapper d-flex justify-content-center align-items-center story'>
            <Container className='wrapper'>

                <h1 className='text-center'>
                    Create Story
                </h1>

                <Form onSubmit={(e) => { handleSubmit(e) }}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter subject title" name='title' value={initial.title} onChange={(e) => { handleChange(e) }} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Story</Form.Label>
                        <Form.Control as="textarea" rows={11} placeholder="Write a story" name='designation' value={initial.designation} onChange={(e) => { handleChange(e) }} />
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default CreateStory