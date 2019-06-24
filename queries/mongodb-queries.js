const mongodb = require("../connectors/mongodb");

async function executeQueries() {

    const testCases = [
        {
            name: 'count all applicants',
            method: async () => {
                const count = await mongodb.Applicant.countDocuments();
            }
        },
        {
            name: 'get all columns',
            method: async () => {
                const result = await mongodb.Applicant.find();
            }
        },
        {
            name: 'get birthdate & phone number',
            method: async () => {
                const result = await mongodb.Applicant.find({}, {'PhoneNumber': true, 'Info.BirthDate': true});
                // console.log(result[0]);
            }
        },
        {
            name: 'get all order by birthdate',
            method: async () => {
                const result = await mongodb.Applicant.find({}, null, {
                    sort: {
                        'Info.BirthDate': 1 //Sort by Date Added DESC
                    }
                },);
                // console.log(result.length);
            }
        },
        {
            name: 'participants pagination 50',
            method: async () => {
                const result = await mongodb.Applicant.find({}, null, {
                    skip: 50, // Starting Row
                    limit: 100, // Ending Row
                    // sort: {
                    //     'Info.BirthDate': 1 //Sort by Date Added DESC
                    // }
                },);
            }
        }
    ];

    console.log('connecting ...');
    await mongodb.connect();
    console.log('running queries ...');
    for (let testCase of testCases) {

        const start = new Date();
        try {
            await testCase.method();
        } catch (e) {
            console.error(e);
        }
        console.log('test `%s` took %dms', testCase.name, new Date() - start);
        // console.log(result[0]);

    }

    await mongodb.disconnect();
    console.log('closed connection');
}

module.exports = {
    executeMongoDBQueries: executeQueries,
};
