
import { AcademicResource, Internship, Notice } from './types';

export const MOCK_RESOURCES: AcademicResource[] = [
  {
    id: '1',
    title: 'Data Structures Syllabus',
    description: 'Detailed syllabus for DS and Algorithms',
    stream: 'B.Tech',
    semester: 3,
    branch: 'CSE',
    type: 'Syllabus',
    fileUrl: 'https://example.com/syllabus_ds.pdf'
  },
  {
    id: '2',
    title: 'Operating Systems Notes',
    description: 'Handwritten notes for OS concepts',
    stream: 'B.Tech',
    semester: 4,
    branch: 'CSE',
    type: 'Notes',
    fileUrl: 'https://example.com/notes_os.pdf'
  },
  {
    id: '3',
    title: 'Surveying PYQ 2023',
    description: 'Previous year question paper for Surveying',
    stream: 'Polytechnic',
    semester: 2,
    branch: 'Civil',
    type: 'PYQ',
    fileUrl: 'https://example.com/pyq_civil.pdf'
  }
];

export const MOCK_INTERNSHIPS: Internship[] = [
  {
    id: 'int-1',
    title: 'Frontend Developer Intern',
    company: 'Tech Solutions Bihar',
    location: 'Patna / Remote',
    type: 'Online',
    duration: '3 Months',
    fee: 'Free',
    applicationUrl: 'https://forms.gle/sample1',
    status: 'Approved',
    postedAt: '2024-05-10'
  },
  {
    id: 'int-2',
    title: 'Civil Site Supervisor Trainee',
    company: 'Patna Metro Construction',
    location: 'Patna',
    type: 'Offline',
    duration: '6 Months',
    fee: '₹50 Application Fee',
    applicationUrl: 'https://forms.gle/sample2',
    status: 'Approved',
    postedAt: '2024-05-12'
  }
];

export const MOCK_NOTICES: Notice[] = [
  {
    id: 'n-1',
    title: 'B.Tech 4th Semester Results Declared',
    content: 'The results for B.Tech 4th Semester (2022 batch) have been released on the official BEU website.',
    date: '2024-05-15',
    isImportant: true
  },
  {
    id: 'n-2',
    title: 'Polytechnic Admission 2024 Notice',
    content: 'New admission forms for polytechnic colleges in Bihar are now available.',
    date: '2024-05-14',
    isImportant: false
  }
];
