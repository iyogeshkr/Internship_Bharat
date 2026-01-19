
export type Stream = 'Polytechnic' | 'B.Tech';

export type Branch = 'CSE' | 'Civil' | 'Mechanical' | 'EEE' | 'ECE' | 'IT';

export type ResourceType = 'Syllabus' | 'Notes' | 'PYQ';

export interface AcademicResource {
  id: string;
  title: string;
  description: string;
  stream: Stream;
  semester: number;
  branch: Branch;
  type: ResourceType;
  fileUrl: string;
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Online' | 'Offline';
  duration: string;
  fee: string;
  applicationUrl: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  postedAt: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  isImportant: boolean;
}
