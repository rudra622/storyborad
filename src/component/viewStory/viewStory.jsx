import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import StarfieldAnimation from 'react-starfield-animation'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteStoryAsync, getStoryAsync, getStorysAsync } from '../../services/action/storyAction'
function ViewStory() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { storys, isLoading, isEdit } = useSelector(state => state.StoryReducer)

  const [isDelete, setIsDelete] = useState(false)

  const handleDelete = (id) => {

    dispatch(DeleteStoryAsync(id))
    setIsDelete(!isDelete)
  }

  const handleIsEdit = (id) => {
    dispatch(getStoryAsync(id));
  }
  useEffect(() => {
    console.log("story view useeffect");
    dispatch(getStorysAsync());
  }, [])
  if (isEdit) {
    navigate('/editStory');
  } else {
    return (
      <>
        <StarfieldAnimation
          style={{
            position: 'absolute',
            width: '100%',
            height: 'auto',
            background: '#000'
          }}
        />
        <div className='container pt-3'>
          <h2 className='text-center m-4 '>View Story</h2>
          {
            isLoading ? <h1>Loading...!</h1> :
              storys.map((st) => {
                console.log(st);
                return (
                  <>
                    <Card className='mb-5'>
                      <Card.Header className='bg-dark text-white'>{st.id} - {st.title}</Card.Header>
                      <Card.Body>
                        <blockquote className="blockquote mb-0">
                          <h3 className='pb-3 text-primary'>{st.title}</h3>
                          <h6>{st.designation}</h6>
                          <button className='btn btn-primary' onClick={() => handleIsEdit(st.id)}>update</button>
                          <button className='btn btn-danger ms-3' onClick={() => { handleDelete(st.id) }}>Delete</button>
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </>
                )
              })

          }
        </div>
      </>
    )
  }
}

export default ViewStory;