const generateEngineers = engineersArray => {

    if(engineersArray.length === 0) {

        return '';
    }

    return `
    ${engineersArray.map((engineer) => {

        return `
        <div class="col">
        <div class="card">
            <div class="card-header">
                ${engineer.getRole()}
            </div>
            <div class="card-body">
                <h5 class="card-title">
                     ${engineer.getName()}
                </h5>

                <p class="card-text">
                <ul class="list-group list-group-flush">

                    <li class="list-group-item">
                    <address>
                    <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                    </address>
                    </li>
                    <li class="list-group-item">
                    <b>ID:</b> ${engineer.getId()}
                    </li>
                    <li class="list-group-item">
                    <b>GitHub:</b> <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
                    </li>

                </ul>
            </div>     
        </div>
        </div>
    
        `;

    }) .join('')}
    `;
    
}
module.exports = templateData => {

    const { interns, engineers, manager } = templateData

    return `
 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <title>Team Genrator Demo</title>
    </head>
        <body>

            <div class="container-sm mw-100 mh-100 bg-light">
                <h1 class="p-4 text-center">My Team</h1>
            </div>

            <div class="row row-cols-1 row-cols-md-4 g-4 m-4">
                <div class="col">
                    <div class="card">

                        <div class="card-header">
                        ${manager.getRole()}
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">
                                ${manager.getName()}
                            </h5>
                            <p class="card-text">
                                <ul class="list-group list-group-flush">

                                    <li class="list-group-item">
                                    <address>
                                    <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                                    </address>
                                    </li>
                                    <li class="list-group-item">
                                    <b>ID:</b> ${manager.getId()}
                                    </li>
                                    <li class="list-group-item">
                                    <b>Office Number</b> ${manager.officeNumber()}
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
                ${generateEngineers(engineers)}
            </div>

        </body>
    </html>
    `;
    
    
}