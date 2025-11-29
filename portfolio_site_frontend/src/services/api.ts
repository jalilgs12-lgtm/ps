import axios from 'axios';

// 1. Create the main API instance
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Your Django Backend Address
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

// 2. Define the Data Types (These match your Django Models)
export interface Profile {
  id: number;
  name: string;
  job_title: string;
  avatar: string;
  github_link: string;
  linkedin_link: string;
  facebook_link: string | null;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  project_link: string;
  image: string;
}

export interface Experience {
  id: number;
  job_title: string;
  location: string;
  date: string;
  description: string;
}

export interface Expertise {
  id: number;
  title: string;
  description: string;
  tags_list: string[];
  icon_name: string;
}

// 3. Export functions to fetch data
export const getProfile = () => api.get<Profile>('profile/');
export const getProjects = () => api.get<Project[]>('projects/');
export const getExperience = () => api.get<Experience[]>('experience/');
export const getExpertise = () => api.get<Expertise[]>('expertise/');
export const sendMessage = (data: any) => api.post('contact/', data);

export default api;
