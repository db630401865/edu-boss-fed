/**
 * 角色相关请求模块
 */
import request from '@/utils/request'
export const getRoles = (data) => {
  return request({
    method: 'POST',
    url: '/boss/role/getRolePages',
    data
  })
}
export const deleteRole = (id) => {
  return request({
    method: 'DELETE',
    url: `/boss/role/${id}`
  })
}
export const createOrUpdate = (data) => {
  return request({
    method: 'POST',
    url: '/boss/role/saveOrUpdate',
    data
  })
}
export const getRoleById = (id) => {
  return request({
    method: 'GET',
    url: `/boss/role/${id}`
  })
}
export const getAllRoles = () => {
  return request({
    method: 'GET',
    url: '/boss/role/all'
  })
}
export const allocateUserRoles = (data) => {
  return request({
    method: 'POST',
    url: '/boss/role/allocateUserRoles',
    data
  })
}
export const getUserRoles = (userId) => {
  return request({
    method: 'GET',
    url: `/boss/role/user/${userId}`
  })
}
// # sourceMappingURL=role.js.map
