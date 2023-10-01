import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  describtion: g.string().optional(),
  githubUrl: g.string().optional(),
  linkedIn: g.string().optional(),
  projects: g.relation(()=>Project).list().optional(),
})

const Project = g.model('Project', {
  title: g.string().length({ min: 2 }),
  describtion: g.string(),
  image: g.url(),
  liveSite: g.url(),
  githubUrl: g.string().optional(),
  category: g.string().search(),
  createdBy : g.relation(()=>User)
})

export default config({
  schema: g
})
