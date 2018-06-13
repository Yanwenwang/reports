export const fakeCandidatesData = [
    {
        "id": 1,
        "name": "Bob Smith",
        "dob": "12-18-1980",
        "ssn": "123-45-6789",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "bob@email.com",
        "custom_id": "123-dru5-290-sss",
        "reports": [
            {
                "id": 1,
                "status": "consider",
                "created_at": "2017-02-10T10:23:21Z",
                "updated_at": "2017-03-16T10:23:21Z",
                "completed_at": "2017-03-16T10:23:21Z",
                "estimated_completed_at": null,
                "package": "finance_manager",
                "geo": "San Francisco",
                "adjudication": null,
                "assessment": "fail",
                "motor_vehicle_report": {
                    "status": "consider",
                    "created_at": "2017-02-10T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "dl_status": "valid",
                    "dl_expiration_date": "2020-03-20",
                    "records": [
                        {
                            "violation": "RECKLESS DRIVING",
                            "issued_date": "2012-04-22",
                            "conviction_date": "2008-10-04",
                            "city": "San Francisco",
                            "rule": "No Major Violation in the past 3 Years"
                        },
                        {
                            "violation": "OPERATING WHILE SUSPENDED",
                            "issued_date": "2012-04-22",
                            "conviction_date": "2008-10-04",
                            "city": "San Francisco",
                            "rule": "No Inadmissable Violation"
                        }
                    ],
                    "filtered_violations": [
                        {
                            "violation": "SPEEDING",
                            "issued_date": "2010-04-02",
                            "conviction_date": "2008-11-24",
                            "city": "Sacramento"
                        }
                    ]
                },
                "county_criminal_search": {
                    "status": "consider",
                    "created_at": "2017-02-10T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "county": "San Francisco",
                    "state": "CA",
                    "records": [
                        {
                            "case_number": "1234567890",
                            "file_date": "2012-05-12",
                            "name": "Bob Smith",
                            "dob": "12-18-1980",
                            "charges": [
                                {
                                    "name": "THEFT 3RD DEGREE",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "felony",
                                    "disposition": "guilty",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                },
                                {
                                    "name": "POSSESSION OF DRUG PARAPHERNALIA",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "misdemeanor",
                                    "disposition": "dismissed",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ]
                        }
                    ]
                },
                "state_criminal_search": {
                    "status": "consider",
                    "created_at": "2017-02-10T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "state": "CA",
                    "records": [
                        {
                            "case_number": "1234567890",
                            "file_date": "2010-03-13",
                            "name": "Bob Smith",
                            "dob": "12-18-1980",
                            "charges": [
                                {
                                    "name": "POSSESSION OF A CONTROLLED SUBSTANCE",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "felony",
                                    "disposition": "guilty",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ],
                            "filtered_charges": [
                                {
                                    "name": "TRUSTPASSING ON PROPERTY",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "misdemeanor",
                                    "disposition": "dismissed",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "dob": "12-18-1980",
        "ssn": "123-45-6789",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94109",
        "phone": "4155555555",
        "email": "jane@email.com",
        "custom_id": "123-asd-29asdc0-sasdss",
        "reports": [
            {
                "id": 2,
                "status": "clear",
                "created_at": "2017-03-14T10:23:21Z",
                "updated_at": "2017-03-16T10:23:21Z",
                "completed_at": "2017-03-16T10:23:21Z",
                "estimated_completed_at": null,
                "package": "finance_manager",
                "geo": "San Francisco",
                "adjudication": "engage",
                "assessment": "pass",
                "motor_vehicle_report": {
                    "status": "clear",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "dl_status": "valid",
                    "dl_expiration_date": "2020-03-20",
                    "records": [],
                    "filtered_violations": [
                        {
                            "violation": "SPEEDING",
                            "issued_date": "2010-04-02",
                            "conviction_date": "2008-11-24",
                            "city": "Sacramento"
                        }
                    ]
                },
                "county_criminal_search": {
                    "status": "clear",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "county": "San Francisco",
                    "state": "CA",
                    "records": []
                },
                "state_criminal_search": {
                    "status": "consider",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "state": "CA",
                    "records": []
                }
            }
        ]
    },
    {
        "id": 3,
        "name": "Matilda Fran",
        "dob": "03-24-1972",
        "ssn": "123-45-5467",
        "dl_number": "123456789",
        "dl_state": "CT",
        "zipcode": "94119",
        "phone": "8605555555",
        "email": "matilda@email.com",
        "custom_id": "12asd3-asdu5-2ads0",
        "reports": [
            {
                "id": 3,
                "status": "pending",
                "created_at": "2017-03-12T10:23:21Z",
                "updated_at": "2017-03-15T10:23:21Z",
                "completed_at": null,
                "estimated_completed_at": "2017-03-16T10:23:21Z",
                "package": "finance_manager",
                "geo": "Los Angelos",
                "adjudication": null,
                "assessment": null,
                "motor_vehicle_report": {
                    "status": "consider",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "dl_status": "valid",
                    "dl_expiration_date": "2020-03-20",
                    "records": [
                        {
                            "violation": "RECKLESS DRIVING",
                            "issued_date": "2012-04-22",
                            "conviction_date": "2008-10-04",
                            "city": "San Francisco",
                            "rule": "No Major Violation in the past 3 Years"
                        },
                        {
                            "violation": "OPERATING WHILE SUSPENDED",
                            "issued_date": "2012-04-22",
                            "conviction_date": "2008-10-04",
                            "city": "San Francisco",
                            "rule": "No Inadmissable Violation"
                        }
                    ],
                    "filtered_violations": [
                        {
                            "violation": "SPEEDING",
                            "issued_date": "2010-04-02",
                            "conviction_date": "2008-11-24",
                            "city": "Sacramento"
                        }
                    ]
                },
                "county_criminal_search": {
                    "status": "pending",
                    "created_at": "2017-03-12T10:23:21Z",
                    "updated_at": "2017-03-15T10:23:21Z",
                    "completed_at": null,
                    "county": "San Francisco",
                    "state": "CA",
                    "records": []
                },
                "state_criminal_search": {
                    "status": "consider",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "state": "CA",
                    "records": [
                        {
                            "case_number": "1234567890",
                            "file_date": "2010-03-13",
                            "name": "Matilda Fran",
                            "dob": "03-24-1972",
                            "charges": [
                                {
                                    "name": "POSSESSION OF A CONTROLLED SUBSTANCE",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "felony",
                                    "disposition": "guilty",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ],
                            "filtered_charges": [
                                {
                                    "name": "TRUSTPASSING ON PROPERTY",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "misdemeanor",
                                    "disposition": "dismissed",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": 4,
        "name": "Susie Nelson",
        "dob": "10-18-1984",
        "ssn": "123-45-6722",
        "dl_number": "123456734",
        "dl_state": "CA",
        "zipcode": "94105",
        "phone": "4155555555",
        "email": "Susie@email.com",
        "custom_id": "13543-35u5-23490",
        "reports": [
            {
                "id": 4,
                "status": "suspended",
                "created_at": "2017-03-14T10:23:21Z",
                "updated_at": "2017-03-16T10:23:21Z",
                "completed_at": "2017-03-16T10:23:21Z",
                "estimated_completed_at": null,
                "package": "office_manager",
                "geo": "San Francisco",
                "adjudication": null,
                "assessment": null,
                "motor_vehicle_report": {
                    "status": "consider",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "dl_status": "valid",
                    "dl_expiration_date": "2020-03-20",
                    "records": [
                        {
                            "violation": "RECKLESS DRIVING",
                            "issued_date": "2012-04-22",
                            "conviction_date": "2008-10-04",
                            "city": "San Francisco",
                            "rule": "No Major Violation in the past 3 Years"
                        },
                        {
                            "violation": "OPERATING WHILE SUSPENDED",
                            "issued_date": "2012-04-22",
                            "conviction_date": "2008-10-04",
                            "city": "San Francisco",
                            "rule": "No Inadmissable Violation"
                        }
                    ],
                    "filtered_violations": [
                        {
                            "violation": "SPEEDING",
                            "issued_date": "2010-04-02",
                            "conviction_date": "2008-11-24",
                            "city": "Sacramento"
                        }
                    ]
                },
                "county_criminal_search": {
                    "status": "suspended",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "county": "San Francisco",
                    "state": "CA",
                    "records": []
                },
                "state_criminal_search": {
                    "status": "consider",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "state": "CA",
                    "records": [
                        {
                            "case_number": "1234567890",
                            "file_date": "2010-03-13",
                            "name": "Susie Nelson",
                            "dob": "10-18-1984",
                            "charges": [
                                {
                                    "name": "POSSESSION OF A CONTROLLED SUBSTANCE",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "felony",
                                    "disposition": "guilty",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ],
                            "filtered_charges": [
                                {
                                    "name": "TRUSTPASSING ON PROPERTY",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "misdemeanor",
                                    "disposition": "dismissed",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": 5,
        "name": "Bob Jones",
        "dob": "12-10-1984",
        "ssn": "123-45-1489",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94110",
        "phone": "4155555555",
        "email": "bob@email.com",
        "custom_id": "123-dru5-290-sssasdf",
        "reports": [
            {
                "id": 5,
                "status": "consider",
                "created_at": "2017-03-14T10:23:21Z",
                "updated_at": "2017-03-16T10:23:21Z",
                "completed_at": "2017-03-16T10:23:21Z",
                "estimated_completed_at": null,
                "package": "finance_manager",
                "geo": "San Francisco",
                "adjudication": null,
                "assessment": null,
                "motor_vehicle_report": {
                    "status": "consider",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "dl_status": "valid",
                    "dl_expiration_date": "2020-03-20",
                    "records": [
                        {
                            "violation": "RECKLESS DRIVING",
                            "issued_date": "2012-04-22",
                            "conviction_date": "2008-10-04",
                            "city": "San Francisco",
                            "rule": "No Major Violation in the past 3 Years"
                        },
                        {
                            "violation": "OPERATING WHILE SUSPENDED",
                            "issued_date": "2012-04-22",
                            "conviction_date": "2008-10-04",
                            "city": "San Francisco",
                            "rule": "No Inadmissable Violation"
                        }
                    ],
                    "filtered_violations": [
                        {
                            "violation": "SPEEDING",
                            "issued_date": "2010-04-02",
                            "conviction_date": "2008-11-24",
                            "city": "Sacramento"
                        },
                        {
                            "violation": "SPEEDING",
                            "issued_date": "2011-09-05",
                            "conviction_date": "2009-10-24",
                            "city": "San Francisco"
                        }
                    ]
                },
                "county_criminal_search": {
                    "status": "consider",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "county": "San Francisco",
                    "state": "CA",
                    "records": [
                        {
                            "case_number": "1234567890",
                            "file_date": "2012-05-12",
                            "name": "Bob Jones",
                            "dob": "12-11-1984",
                            "charges": [
                                {
                                    "name": "THEFT 3RD DEGREE",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "felony",
                                    "disposition": "guilty",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                },
                                {
                                    "name": "POSSESSION OF DRUG PARAPHERNALIA",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "misdemeanor",
                                    "disposition": "dismissed",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ],
                            "filtered_charges": [
                                {
                                    "name": "TRUSTPASSING ON PROPERTY",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "misdemeanor",
                                    "disposition": "dismissed",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ]
                        }
                    ]
                },
                "state_criminal_search": {
                    "status": "consider",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "state": "CA",
                    "records": [
                        {
                            "case_number": "1234567890",
                            "file_date": "2010-03-13",
                            "name": "Bob S Jones",
                            "dob": "12-18-1984",
                            "charges": [
                                {
                                    "name": "POSSESSION OF A CONTROLLED SUBSTANCE",
                                    "offense_date": "2011-01-03",
                                    "charge_type": "felony",
                                    "disposition": "guilty",
                                    "disposition_date": "2011-05-01",
                                    "charge_date": "2011-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ],
                            "filtered_charges": [
                                {
                                    "name": "TRUSTPASSING ON PROPERTY",
                                    "offense_date": "2011-01-03",
                                    "charge_type": "misdemeanor",
                                    "disposition": "dismissed",
                                    "disposition_date": "2011-05-01",
                                    "charge_date": "2011-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": 6,
        "name": "Harriet Tucker",
        "dob": "12-18-1960",
        "ssn": "123-45-6742",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "harriet@email.com",
        "custom_id": "1asd23-dradsu5-29ad0-ssads",
        "reports": [
            {
                "id": 6,
                "status": "clear",
                "created_at": "2017-03-14T10:23:21Z",
                "updated_at": "2017-03-16T10:23:21Z",
                "completed_at": "2017-03-16T10:23:21Z",
                "estimated_completed_at": null,
                "package": "finance_manager",
                "geo": "San Francisco",
                "adjudication": null,
                "assessment": null,
                "motor_vehicle_report": {
                    "status": "clear",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "dl_status": "valid",
                    "dl_expiration_date": "2020-03-20",
                    "records": []
                },
                "county_criminal_search": {
                    "status": "clear",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "county": "San Francisco",
                    "state": "CA",
                    "records": []
                },
                "state_criminal_search": {
                    "status": "clear",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "state": "CA",
                    "records": []
                }
            }
        ]
    },
    {
        "id": 7,
        "name": "Fran Sisco",
        "dob": "12-10-1959",
        "ssn": "123-45-6159",
        "dl_number": "12345664",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "Fran@email.com",
        "custom_id": "asd-34-asd-aas",
        "reports": [
            {
                "id": 7,
                "status": "pending",
                "created_at": "2017-03-29T10:23:21Z",
                "updated_at": "2017-03-29T10:23:21Z",
                "completed_at": null,
                "estimated_completed_at": "2017-05-29T10:23:21Z",
                "package": "finance_manager",
                "geo": "San Francisco",
                "adjudication": null,
                "assessment": null,
                "motor_vehicle_report": {
                    "status": "pending",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": null,
                    "dl_status": "valid",
                    "dl_expiration_date": "2020-03-20",
                    "violations": [],
                    "filtered_violations": []
                },
                "county_criminal_search": {
                    "status": "pending",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": null,
                    "county": "San Francisco",
                    "state": "CA",
                    "records": []
                },
                "state_criminal_search": {
                    "status": "pending",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": null,
                    "state": "CA",
                    "records": []
                }
            },
            {
                "id": 8,
                "status": "consider",
                "created_at": "2016-02-10T10:23:21Z",
                "updated_at": "2016-03-16T10:23:21Z",
                "completed_at": "2016-03-16T10:23:21Z",
                "estimated_completed_at": null,
                "package": "finance_manager",
                "geo": "San Francisco",
                "adjudication": null,
                "assessment": null,
                "motor_vehicle_report": {
                    "status": "consider",
                    "created_at": "2016-02-10T10:23:21Z",
                    "updated_at": "2016-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "dl_status": "valid",
                    "dl_expiration_date": "2020-03-20",
                    "records": [
                        {
                            "violation": "RECKLESS DRIVING",
                            "issued_date": "2012-04-22",
                            "conviction_date": "2008-10-04",
                            "city": "San Francisco",
                            "rule": "No Major Violation in the past 3 Years"
                        },
                        {
                            "violation": "OPERATING WHILE SUSPENDED",
                            "issued_date": "2012-04-22",
                            "conviction_date": "2008-10-04",
                            "city": "San Francisco",
                            "rule": "No Inadmissable Violation"
                        }
                    ],
                    "filtered_violations": [
                        {
                            "violation": "SPEEDING",
                            "issued_date": "2010-04-02",
                            "conviction_date": "2008-11-24",
                            "city": "Sacramento"
                        }
                    ]
                },
                "county_criminal_search": {
                    "status": "consider",
                    "created_at": "2016-02-10T10:23:21Z",
                    "updated_at": "2016-03-16T10:23:21Z",
                    "completed_at": "2016-03-16T10:23:21Z",
                    "county": "San Francisco",
                    "state": "CA",
                    "records": [
                        {
                            "case_number": "1234567890",
                            "file_date": "2012-05-12",
                            "name": "Fran Joe Sisco",
                            "dob": "12-10-1959",
                            "charges": [
                                {
                                    "name": "THEFT 3RD DEGREE",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "felony",
                                    "disposition": "guilty",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                },
                                {
                                    "name": "POSSESSION OF DRUG PARAPHERNALIA",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "misdemeanor",
                                    "disposition": "dismissed",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ]
                        }
                    ]
                },
                "state_criminal_search": {
                    "status": "consider",
                    "created_at": "2016-02-10T10:23:21Z",
                    "updated_at": "2016-03-16T10:23:21Z",
                    "completed_at": "2016-03-16T10:23:21Z",
                    "state": "CA",
                    "records": [
                        {
                            "case_number": "1234567890",
                            "file_date": "2010-03-13",
                            "name": "Fran J Sisco",
                            "dob": "12-10-1959",
                            "charges": [
                                {
                                    "name": "POSSESSION OF A CONTROLLED SUBSTANCE",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "felony",
                                    "disposition": "guilty",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ],
                            "filtered_charges": [
                                {
                                    "name": "TRUSTPASSING ON PROPERTY",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "misdemeanor",
                                    "disposition": "dismissed",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": 8,
        "name": "Diana Alpha",
        "dob": "02-03-1981",
        "ssn": "123-45-6789",
        "dl_number": "123456742",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "diana@email.com",
        "custom_id": "123-dradu5-29asf0-sss",
        "reports": [
            {
                "id": 9,
                "status": "suspended",
                "created_at": "2017-03-14T10:23:21Z",
                "updated_at": "2017-03-16T10:23:21Z",
                "completed_at": "2017-03-16T10:23:21Z",
                "estimated_completed_at": null,
                "package": "finance_manager",
                "geo": "San Francisco",
                "adjudication": null,
                "assessment": null,
                "motor_vehicle_report": {
                    "status": "suspended",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "dl_status": "valid",
                    "dl_expiration_date": "2020-03-20",
                    "records": [
                        {
                            "violation": "RECKLESS DRIVING",
                            "issued_date": "2012-04-22",
                            "conviction_date": "2008-10-04",
                            "city": "San Francisco",
                            "rule": "No Major Violation in the past 3 Years"
                        },
                        {
                            "violation": "OPERATING WHILE SUSPENDED",
                            "issued_date": "2012-04-22",
                            "conviction_date": "2008-10-04",
                            "city": "San Francisco",
                            "rule": "No Inadmissable Violation"
                        }
                    ],
                    "filtered_violations": [
                        {
                            "violation": "SPEEDING",
                            "issued_date": "2010-04-02",
                            "conviction_date": "2008-11-24",
                            "city": "Sacramento"
                        }
                    ]
                },
                "county_criminal_search": {
                    "status": "consider",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "county": "San Francisco",
                    "state": "CA",
                    "records": [
                        {
                            "case_number": "1234567890",
                            "file_date": "2012-05-12",
                            "name": "Diana Low Alpha",
                            "dob": "02-03-1981",
                            "charges": [
                                {
                                    "name": "THEFT 3RD DEGREE",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "felony",
                                    "disposition": "guilty",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                },
                                {
                                    "name": "POSSESSION OF DRUG PARAPHERNALIA",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "misdemeanor",
                                    "disposition": "dismissed",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ]
                        }
                    ]
                },
                "state_criminal_search": {
                    "status": "consider",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "state": "CA",
                    "records": [
                        {
                            "case_number": "1234567890",
                            "file_date": "2010-03-13",
                            "name": "Bob Smith",
                            "dob": "12-18-1980",
                            "charges": [
                                {
                                    "name": "POSSESSION OF A CONTROLLED SUBSTANCE",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "felony",
                                    "disposition": "guilty",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ],
                            "filtered_charges": [
                                {
                                    "name": "TRUSTPASSING ON PROPERTY",
                                    "offense_date": "2010-01-03",
                                    "charge_type": "misdemeanor",
                                    "disposition": "dismissed",
                                    "disposition_date": "2012-05-01",
                                    "charge_date": "2012-05-02",
                                    "sentance": "PROBATION: 72 MONTHS"
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": 9,
        "name": "Janelle Lopez",
        "dob": "12-13-1969",
        "ssn": "123-45-6734",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "Janelle@email.com",
        "custom_id": "1asd23-daddsu5-29ad0-ssa57ds",
        "reports": [
            {
                "id": 10,
                "status": "clear",
                "created_at": "2017-03-14T10:23:21Z",
                "updated_at": "2017-03-16T10:23:21Z",
                "completed_at": "2017-03-16T10:23:21Z",
                "estimated_completed_at": null,
                "package": "finance_manager",
                "geo": "San Francisco",
                "adjudication": null,
                "assessment": null,
                "motor_vehicle_report": {
                    "status": "clear",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "dl_status": "valid",
                    "dl_expiration_date": "2020-03-20",
                    "records": []
                },
                "county_criminal_search": {
                    "status": "clear",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "county": "San Francisco",
                    "state": "CA",
                    "records": []
                },
                "state_criminal_search": {
                    "status": "clear",
                    "created_at": "2017-03-14T10:23:21Z",
                    "updated_at": "2017-03-16T10:23:21Z",
                    "completed_at": "2017-03-16T10:23:21Z",
                    "state": "CA",
                    "records": []
                }
            }
        ]
    },
    {
        "id": 10,
        "name": "August Orian",
        "dob": "12-02-1989",
        "ssn": "123-45-6114",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "august@email.com",
        "custom_id": "1asd23-draweu5-29ad0-ss25ads",
        "reports": [
            {
                "id": 11,
                "status": "consider",
                "created_at": "2017-03-23T10:23:21Z",
                "updated_at": "2017-03-24T10:23:21Z",
                "completed_at": "2017-03-24T10:23:21Z",
                "estimated_completed_at": null,
                "package": "finance_manager",
                "geo": "San Francisco",
                "adjudication": null,
                "assessment": null,
                "motor_vehicle_report": {
                    "status": "clear",
                    "created_at": "2017-03-23T10:23:21Z",
                    "updated_at": "2017-03-24T10:23:21Z",
                    "completed_at": "2017-03-24T10:23:21Z",
                    "dl_status": "valid",
                    "dl_expiration_date": "2020-03-20",
                    "records": []
                },
                "county_criminal_search": {
                    "status": "clear",
                    "created_at": "2017-03-23T10:23:21Z",
                    "updated_at": "2017-03-23T10:23:21Z",
                    "completed_at": "2017-03-24T10:23:21Z",
                    "county": "San Francisco",
                    "state": "CA",
                    "records": []
                },
                "state_criminal_search": {
                    "status": "clear",
                    "created_at": "2017-03-23T10:23:21Z",
                    "updated_at": "2017-03-24T10:23:21Z",
                    "completed_at": "2017-03-24T10:23:21Z",
                    "state": "CA",
                    "records": []
                }
            }
        ]
    },
    {
        "id": 11,
        "name": "Jared Jenn",
        "dob": "10-02-1989",
        "ssn": "123-45-6123",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "jared@email.com",
        "custom_id": "1asd23-draweu5-29ad0-sar35eds",
        "reports": [
            {
                "id": 12,
                "status": "consider",
                "created_at": "2017-03-23T10:23:21Z",
                "updated_at": "2017-03-24T10:23:21Z",
                "completed_at": "2017-03-24T10:23:21Z",
                "estimated_completed_at": null,
                "package": "finance_manager",
                "geo": "San Francisco",
                "adjudication": null,
                "assessment": null
            }
        ]
    },
    {
        "id": 12,
        "name": "Jaz Geoff",
        "dob": "10-02-1992",
        "ssn": "123-45-6103",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "jaz@email.com",
        "custom_id": "1asd23-drasdeu5-29ad0-sar34eds",
        "reports": [
            {
                "id": 13,
                "status": "suspended",
                "created_at": "2017-03-23T10:23:21Z",
                "updated_at": "2017-03-24T10:23:21Z",
                "completed_at": "2017-03-24T10:23:21Z",
                "estimated_completed_at": null,
                "package": "finance_manager",
                "geo": "San Francisco",
                "adjudication": null,
                "assessment": null
            },
            {
                "id": 14,
                "status": "clear",
                "created_at": "2017-03-23T10:23:21Z",
                "updated_at": "2017-03-24T10:23:21Z",
                "completed_at": "2017-03-24T10:23:21Z",
                "estimated_completed_at": null,
                "package": "finance_manager",
                "geo": "San Francisco",
                "adjudication": null,
                "assessment": null
            }
        ]
    },
    {
        "id": 13,
        "name": "Roberto Gusto",
        "dob": "10-22-1999",
        "ssn": "123-45-6129",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "roberto@email.com",
        "custom_id": "1asd23-draasdweu5-29ad0-sa65reds",
        "reports": [
            {
                "id": 15,
                "status": "consider",
                "created_at": "2017-03-13T10:23:21Z",
                "updated_at": "2017-03-14T10:23:21Z",
                "completed_at": "2017-03-14T10:23:21Z",
                "estimated_completed_at": null,
                "package": "finance_manager",
                "geo": "San Francisco",
                "adjudication": "engage",
                "assessment": "fail"
            }
        ]
    },
    {
        "id": 14,
        "name": "Jessica Gusto",
        "dob": "10-29-1995",
        "ssn": "123-45-6923",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "jessica@email.com",
        "custom_id": "1asd23-draasdweu5-29ad0-saad75ds",
        "reports": [
            {
                "id": 16,
                "status": "consider",
                "created_at": "2017-03-24T10:23:21Z",
                "updated_at": "2017-03-25T10:23:21Z",
                "completed_at": "2017-03-25T10:23:21Z",
                "estimated_completed_at": null,
                "package": "office_manager",
                "geo": "Los Angelos",
                "adjudication": null,
                "assessment": "fail"
            }
        ]
    },
    {
        "id": 15,
        "name": "Jessica Gusto",
        "dob": "10-29-1995",
        "ssn": "123-45-6923",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "jessica@email.com",
        "custom_id": "1asd23-draasdweu5-29ad0-saa23dds",
        "reports": [
            {
                "id": 17,
                "status": "suspended",
                "created_at": "2017-03-24T10:23:21Z",
                "updated_at": "2017-03-25T10:23:21Z",
                "completed_at": "2017-03-25T10:23:21Z",
                "estimated_completed_at": null,
                "package": "office_manager",
                "geo": "Los Angelos",
                "adjudication": null,
                "assessment": null
            }
        ]
    },
    {
        "id": 16,
        "name": "Jessica Smith",
        "dob": "01-02-1995",
        "ssn": "123-45-6443",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "jessica@email.com",
        "custom_id": "1asd23-draasdweu5-29ad0-sa5adds",
        "reports": [
            {
                "id": 18,
                "status": "consider",
                "created_at": "2017-03-24T10:23:21Z",
                "updated_at": "2017-03-25T10:23:21Z",
                "completed_at": "2017-03-25T10:23:21Z",
                "estimated_completed_at": null,
                "package": "office_manager",
                "geo": "Los Angelos",
                "adjudication": null,
                "assessment": "fail"
            }
        ]
    },
    {
        "id": 17,
        "name": "Jessica Wu",
        "dob": "05-02-1995",
        "ssn": "123-45-6444",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "jessica@email.com",
        "custom_id": "1asd23-draasdweu5-29ad0-sa624dds",
        "reports": [
            {
                "id": 19,
                "status": "consider",
                "created_at": "2017-03-24T10:23:21Z",
                "updated_at": "2017-03-25T10:23:21Z",
                "completed_at": "2017-03-25T10:23:21Z",
                "estimated_completed_at": null,
                "package": "office_manager",
                "geo": "Los Angelos",
                "adjudication": null,
                "assessment": "fail"
            }
        ]
    },
    {
        "id": 18,
        "name": "Jessica Wu",
        "dob": "05-23-1996",
        "ssn": "123-45-6444",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "jessica@email.com",
        "custom_id": "1asd23-dra35dweu5-29ad0-saadds",
        "reports": [
            {
                "id": 20,
                "status": "consider",
                "created_at": "2017-03-24T10:23:21Z",
                "updated_at": "2017-03-25T10:23:21Z",
                "completed_at": "2017-03-25T10:23:21Z",
                "estimated_completed_at": null,
                "package": "office_manager",
                "geo": "Los Angelos",
                "adjudication": null,
                "assessment": "fail"
            }
        ]
    },
    {
        "id": 19,
        "name": "Jam Penn",
        "dob": "05-23-1996",
        "ssn": "123-45-6112",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "jam@email.com",
        "custom_id": "1asd23-draasd35dweu5-29ad0-saadds",
        "reports": [
            {
                "id": 21,
                "status": "consider",
                "created_at": "2017-03-24T10:23:21Z",
                "updated_at": "2017-03-25T10:23:21Z",
                "completed_at": "2017-03-25T10:23:21Z",
                "estimated_completed_at": null,
                "package": "office_manager",
                "geo": "Los Angelos",
                "adjudication": null,
                "assessment": "fail"
            }
        ]
    },
    {
        "id": 20,
        "name": "Alpha Rome",
        "dob": "05-23-1986",
        "ssn": "123-45-4112",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "alpha@email.com",
        "custom_id": "1asd23-d35dweu5-29ad0-saadds",
        "reports": [
            {
                "id": 22,
                "status": "consider",
                "created_at": "2017-03-24T10:23:21Z",
                "updated_at": "2017-03-25T10:23:21Z",
                "completed_at": "2017-03-25T10:23:21Z",
                "estimated_completed_at": null,
                "package": "office_manager",
                "geo": "Los Angelos",
                "adjudication": "engage",
                "assessment": "fail"
            }
        ]
    },
    {
        "id": 21,
        "name": "Jake Phang",
        "dob": "05-23-1978",
        "ssn": "123-45-6165",
        "dl_number": "123456789",
        "dl_state": "CA",
        "zipcode": "94119",
        "phone": "4155555555",
        "email": "jake@email.com",
        "custom_id": "1asd23-draau5-29ad0-saadds",
        "reports": [
            {
                "id": 23,
                "status": "consider",
                "created_at": "2017-03-24T10:23:21Z",
                "updated_at": "2017-03-25T10:23:21Z",
                "completed_at": "2017-03-25T10:23:21Z",
                "estimated_completed_at": null,
                "package": "office_manager",
                "geo": "Los Angelos",
                "adjudication": null,
                "assessment": "fail"
            }
        ]
    }
];