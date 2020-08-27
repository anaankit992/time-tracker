export const taskType = [
    {
        label: "Daily Standups",
        value: "Daily Standups",
    },
    {
        label: "Software development",
        value: "Software development",
    }, {
        label: "Project related meeting",
        value: "Project related meeting",
    }, {
        label: "Trainings/Conference",
        value: "Trainings/Conference",
    }
]

export const taskNames = {
    "Daily Standups": [
        {
            label: "Task assignment Standup",
            value: "Task assignment Standup",
        },
        {
            label: "Retrospective meeting",
            value: "Retrospective meeting",
        }, {
            label: "Dev Brain stroming",
            value: "Dev Brain stroming",
        }
    ],
    "Software development": [
        {
            label: "UI/Article Development",
            value: "UI/Article Development",
        },
        {
            label: "Self Review",
            value: "Self Review",
        }, {
            label: "Rules Development",
            value: "Rules Development",
        }
    ],
    "Project related meeting": [
        {
            label: "Knowledge transfer",
            value: "Knowledge transfer",
        }
    ]
    ,
    "Trainings/Conference": [
        {
            label: "Leadership Web Series",
            value: "Leadership Web Series",
        }
    ]
}




export const users = [
    { label: "Ankit", value: "ankit" },
    { label: "Lakshmi", value: "Lakshmi" },
    { label: "Bindo", value: "Bindo" },
    { label: "Astha", value: "Astha" },
]



const userDataSet = {
    ankit: {
        "08/12/2020": [
            {
                taskType: "Daily Standups",
                taskName: "Task assignment Standup",
                hrs: "0.5",
                ticketNum: "AN-1",
                ticketDesc: "Task assignment1",
                issueType: "Task1",
                remarks: "-"
            },
            {
                taskType: "Software development",
                taskName: "UI/Article Development",
                hrs: "3",
                ticketNum: "AN-3",
                ticketDesc: "Development",
                issueType: "Task2",
                remarks: "-"
            },
            {
                taskType: "Software development",
                taskName: "Pre & Post processor Tool testing / Rule Validation",
                hrs: "4",
                ticketNum: "AN-4",
                ticketDesc: "Task Development",
                issueType: "Task2",
                remarks: "-"
            },
            {
                taskType: "Trainings/Conference",
                taskName: "Leadership Web Series",
                hrs: "0.5",
                ticketNum: "AN-5",
                ticketDesc: "Training",
                issueType: "Task3",
                remarks: "-"
            }
        ]
    },
    astha: {
        "08/21/2020": [
            {
                taskType: "Daily Standups",
                taskName: "Task assignment Standup",
                hrs: "0.5",
                ticketNum: "AN-1",
                ticketDesc: "Task assignment1",
                issueType: "Task1",
                remarks: "-"
            },
            {
                taskType: "Daily Standups",
                taskName: "Retrospective meeting",
                hrs: "1",
                ticketNum: "AN-2",
                ticketDesc: "Task assignment2",
                issueType: "Task1",
                remarks: "-"
            },
            {
                taskType: "Software development",
                taskName: "UI/Article Development",
                hrs: "4",
                ticketNum: "AN-3",
                ticketDesc: "Development",
                issueType: "Task2",
                remarks: "-"
            },
            {
                taskType: "Software development",
                taskName: "POC/ internal Projects development",
                hrs: "4",
                ticketNum: "AN-4",
                ticketDesc: "Task Development",
                issueType: "Task3",
                remarks: "-"
            },
            {
                taskType: "Knowledge transfer",
                taskName: "Project related meeting",
                hrs: "1",
                ticketNum: "AN-5",
                ticketDesc: "Meeting",
                issueType: "Task4",
                remarks: "Not Applicable"
            }
        ]   
    },
    binod: {
        "08/20/2020": [
            {
                taskType: "Daily Standups",
                taskName: "Task assignment Standup",
                hrs: "0.5",
                ticketNum: "AN-1",
                ticketDesc: "Task assignment1",
                issueType: "Task1",
                remarks: "-"
            },
            {
                taskType: "Software development",
                taskName: "UI/Article Development",
                hrs: "4.5",
                ticketNum: "AN-3",
                ticketDesc: "Development",
                issueType: "Task2",
                remarks: "-"
            },
            {
                taskType: "Software development",
                taskName: "Self Review",
                hrs: "2",
                ticketNum: "AN-4",
                ticketDesc: "Task Development",
                issueType: "Task3",
                remarks: "-"
            },
            {
                taskType: "Trainings/Conference",
                taskName: "Leadership Web Series",
                hrs: "2",
                ticketNum: "AN-5",
                ticketDesc: "Training",
                issueType: "Task3",
                remarks: "-"
            }
        ]   
    },
    samiksha: {
        "08/12/2020": [
            {
                taskType: "Daily Standups",
                taskName: "Task assignment Standup",
                hrs: "1",
                ticketNum: "AN-1",
                ticketDesc: "Task assignment1",
                issueType: "Task1",
                remarks: "-"
            },
            {
                taskType: "Software development",
                taskName: "UI/Article Development",
                hrs: "6.5",
                ticketNum: "AN-3",
                ticketDesc: "Development",
                issueType: "Task2",
                remarks: "-"
            },
            {
                taskType: "Software development",
                taskName: "Self Review",
                hrs: "1",
                ticketNum: "AN-4",
                ticketDesc: "Task Development",
                issueType: "Task3",
                remarks: "-"
            }
        ]   
    }
}
