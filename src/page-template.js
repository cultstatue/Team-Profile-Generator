// function to loop through interns array
const generateInterns = internsArray => {

    if(internsArray.length === 0) {

        return '';
    }

    return `
    ${internsArray.map((intern) => {

        return `
        <div class="col">
        <div class="card">
            <div class="card-header text-bg-success">
                ${intern.getRole()}
            </div>
            <div class="card-body">
                <h5 class="card-title">
                     <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                     <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                     </svg>
                     ${intern.getName()}
                </h5>

                <p class="card-text">
                <ul class="list-group list-group-flush">

                    <li class="list-group-item">
                    <address>
                    <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                    </address>
                    </li>
                    <li class="list-group-item">
                    <b>ID:</b> ${intern.getId()}
                    </li>
                    <li class="list-group-item">
                    <b>School:</b> ${intern.getSchool()}
                    </li>

                </ul>
            </div>     
        </div>
        </div>
    
        `;

    }) .join('')}
    `;
    
}

// function to loop through engineers array
const generateEngineers = engineersArray => {

    if(engineersArray.length === 0) {

        return '';
    }

    return `
    ${engineersArray.map((engineer) => {

        return `
        <div class="col">
        <div class="card">
            <div class="card-header text-bg-warning">
                ${engineer.getRole()}
            </div>
            <div class="card-body">
                <h5 class="card-title">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                    </svg>
                     ${engineer.getName()}
                </h5>

                <p class="card-text">
                <ul class="list-group list-group-flush">

                    <li class="list-group-item">
                    <address><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></address>
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

// function to create base HTML and a team manager card
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

                        <div class="card-header text-bg-primary">
                        ${manager.getRole()}
                        </div>

                        <div class="card-body">
                                <h5 class="card-title">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
                                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
                                </svg>
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
                ${generateInterns(interns)}
            </div>

        </body>
    </html>
    `;
    
    
}