import { schema, normalize } from 'normalizr';
const data = [
    {"id":"student-1",
        "name":"Mango",
        "courses":
            [{"id":"course-1",
                "name":"Blockchain",
                "instructors": [{"id":"instructor-1","name":"Jack"}, {"id":"instructor-2","name":"Ming"}]},

                {"id":"course-2",
                    "name":"AI",
                    "instructors":[{"id":"instructor-2","name":"Ming"},{"id":"instructor-3","name":"Pam"}]}]},

    {"id":"student-2",
        "name":"Poly",
        "courses":
            [{"id":"course-2",
                "name":"AI",
                "instructors":[{"id":"instructor-2","name":"Ming"},{"id":"instructor-3","name":"Pam"}]},

                {"id":"course-3",
                    "name":"Machine Learning",
                    "instructors":[{"id":"instructor-1","name":"Jack"},{"id":"instructor-4","name":"David"}]}]},

    {"id":"student-3",
        "name":"Ajax",
        "courses":
            [{"id":"course-1",
                "name":"Blockchain",
                "instructors":[{"id":"instructor-1","name":"Jack"},{"id":"instructor-2","name":"Ming"}]},

                {"id":"course-3",
                    "name":"Machine Learning",
                    "instructors":[{"id":"instructor-1","name":"Jack"},{"id":"instructor-4","name":"David"}]}]}];

const instructorsSchema = new schema.Entity('instructors');

const coursesSchema = new schema.Entity('courses', {
    instructors:[instructorsSchema]
});
const studentsSchema = new schema.Entity('students',
    {courses: [coursesSchema]
    });
const normalizeData = normalize(data, [studentsSchema]);
console.log(normalizeData);