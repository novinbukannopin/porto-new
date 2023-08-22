// NOTE This file is auto-generated by Contentlayer

export { isType } from 'contentlayer/client'

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import { allBlogs } from './Blog/_index.mjs'
import { allProjects } from './Project/_index.mjs'
import { allNotes } from './Note/_index.mjs'
import { allTestimonies } from './Testimony/_index.mjs'

export { allBlogs, allProjects, allNotes, allTestimonies }

export const allDocuments = [...allBlogs, ...allProjects, ...allNotes, ...allTestimonies]


