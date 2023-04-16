import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UpdateStoryAsync } from '../../services/action/storyAction'
import '../EditStory/EditStory.css'

function EditStory() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { story } = useSelector(state => state.StoryReducer)
    const [initial, setInitial] = useState(story)

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setInitial({ ...initial, [name]: value })
    }
    const handleSubmit = (e) => {

        e.preventDefault()
        const data = initial
        dispatch(UpdateStoryAsync(data))
        navigate("/")
    }
    return (
        <div className='form-wrapper d-flex justify-content-center align-items-center story'>
            <Container className='wrapper'>

                <h1 className='text-center'>
                    Edit Story
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
                            Update
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default EditStory