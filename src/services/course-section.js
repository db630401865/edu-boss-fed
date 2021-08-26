/**
 * 课程章节相关请求模块
 */
import request from '@/utils/request'
export const getSectionAndLesson = (courseId) => {
  return request({
    method: 'GET',
    url: '/boss/course/section/getSectionAndLesson',
    params: {
      courseId
    }
  })
}
export const saveOrUpdateSection = (data) => {
  return request({
    method: 'POST',
    url: '/boss/course/section/saveOrUpdateSection',
    data
  })
}
export const getSectionById = (sectionId) => {
  return request({
    method: 'GET',
    url: '/boss/course/section/getBySectionId',
    params: {
      sectionId
    }
  })
}
// # sourceMappingURL=course-section.js.map
