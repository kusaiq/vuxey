// // ** React Imports
import { useState, useEffect } from 'react'

// // ** Custom Components
import Avatar from '@components/avatar'

// // ** Third Party Components
// import { Lock, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'
import { useForm } from 'react-hook-form'

import {editUser} from "../../user/store/action/index"
import {useDispatch} from "react-redux"

const UserAccountTab = ({ selectedUser }) => {
//   // ** States
  const [img, setImg] = useState(null)
  const [role, setRole] = useState(selectedUser.role)
  const [userData, setUserData] = useState(null)
  const dispatch = useDispatch()

//   // ** Function to change user image
//   const onChange = e => {
//     const reader = new FileReader(),
//       files = e.target.files
//     reader.onload = function () {
//       setImg(reader.result)
//     }
//     reader.readAsDataURL(files[0])
//   }

//   // ** Update user image on mount or change

//vars
const { register, handleSubmit } = useForm()
  useEffect(() => {
    if (selectedUser !== null || (selectedUser !== null && userData !== null && selectedUser.id !== userData.id)) {
      setUserData(selectedUser)
      if (selectedUser.image !== null) {
        return setImg(selectedUser.image)
      } else {
        return setImg(null)
      }
    }
  }, [selectedUser, userData])

//onSubmit
  const onSubmit = (values, e) => {
      dispatch(
        editUser({
          role,
          username: values.username,
          // password: values.password,
          // country: values.country,
          // phone: values.phone,
          email: values.email,
          id : selectedUser.id
          // currentPlan: plan,
          // status: 'active',
          // avatar: ''
        })
      )
      window.location.reload()
  }

  const reset = () => {
    window.location.reload()
  }

//   // ** Renders User
  const renderUserAvatar = () => {
    if (img === null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded mr-2 my-25'
          content={selectedUser.username}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    } else {
      return (
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer'
          src={img}
          alt='user profile avatar'
          height='90'
          width='90'
        />
      )
    }
  }

  
    return (
      <>
      { userData === null || userData === undefined ? (null) : (<Row>
        <Col sm='12'>
          <Media className='mb-2'>
            {renderUserAvatar()}
            <Media className='mt-50' body>
              <h4>{selectedUser.username} </h4>
            </Media>
          </Media>
        </Col>
        <Col sm='12'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='username'>Username</Label>
                  <Input type='text' id='username' placeholder='Username' defaultValue={userData.username} name='username' innerRef={register({ required: false })} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='email'>Email</Label>
                  <Input type='text' id='email' name='email' placeholder='john.doe@example.com' innerRef={register({ required: false })}  defaultValue={userData.email} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='role'>Role</Label>
                  <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)} defaultValue={userData.role}>
                    <option value={2}>Public</option>
                    <option value={1}>Authenticated</option>
                    <option value={3}>Xadmin</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                  Save Changes
                </Button.Ripple>
                <Button.Ripple color='secondary' onClick={(reset)} outline>
                  Reset
                </Button.Ripple>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
       ) }
    </>
    )
 }
export default UserAccountTab
