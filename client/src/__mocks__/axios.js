const mockResponse = {
    data: {
        results: [
            {
                id: 1,
                name: 'Test Name',
                lastName: 'Test Last Name',
                pesel: '12345678901',
                city: 'Test City',
                street: 'Test Street',
                zipCode: '12-345'
            },
            {
                id: 2,
                name: 'Test Name 2',
                lastName: 'Test Last Name 2',
                pesel: '12345678902',
                city: 'Test City 2',
                street: 'Test Street 2',
                zipCode: '12-346'
            },
            {
                id: 3,
                name: 'Test Name 3',
                lastName: 'Test Last Name 3',
                pesel: '12345678903',
                city: 'Test City 3',
                street: 'Test Street 3',
                zipCode: '12-347'
            }
        ]
    },
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse),
}