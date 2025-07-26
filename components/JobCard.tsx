import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Clock, Calendar } from 'lucide-react';

interface JobCardProps {
  job: {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    salary: string;
    experience: string;
    description: string;
    requirements: string[];
    benefits: string[];
    postedDate: string;
    applicationDeadline: string;
  };
  typeColors: Record<string, string>;
}

export function JobCard({ job, typeColors }: JobCardProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-teal-dark">{job.title}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-2">
              <Badge variant="outline" className="border-teal-light text-teal-dark">{job.department}</Badge>
              <Badge className={typeColors[job.type as keyof typeof typeColors]}>
                {job.type}
              </Badge>
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="font-semibold text-orange">{job.salary}</div>
            <div className="text-sm text-gray-600">{job.experience}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-orange" />
              {job.location}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-orange" />
              Posted: {new Date(job.postedDate).toLocaleDateString()}
            </div>
          </div>
          
          <p className="text-gray-600">{job.description}</p>
          
          <div>
            <h4 className="font-semibold text-navy-blue mb-2">Key Requirements:</h4>
            <ul className="space-y-1">
              {job.requirements.slice(0, 3).map((req, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-leaf-green rounded-full mr-2 flex-shrink-0"></div>
                  {req}
                </li>
              ))}
              {job.requirements.length > 3 && (
                <li className="text-sm text-gray-600 ml-4">
                  +{job.requirements.length - 3} more requirements
                </li>
              )}
            </ul>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-1 text-orange" />
              Apply by: {new Date(job.applicationDeadline).toLocaleDateString()}
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="border-teal-dark text-teal-dark hover:bg-teal-dark hover:text-white"
                size="sm"
              >
                View Details
              </Button>
              <Button 
                className="bg-orange hover:bg-orange/90 text-white"
                size="sm"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}