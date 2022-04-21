import {$studentCode, setStudentCodeSuccess, setStudentCodeFailure } from './index'
$studentCode.on(setStudentCodeSuccess, (_, response)=> response).on(setStudentCodeFailure, (_, response)=> response)


$studentCode.watch(response => {
    console.log(response)
  })
