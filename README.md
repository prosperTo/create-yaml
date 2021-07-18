# Create Docker File Action

Through this action you can create a docker file in a very sensible way

## Inputs
* **[required] `file-name`**: Is the name file on finish process
* **[required] `type`**: Is the extencion file '.yaml' or '.yml'
* **[required] `params`**: Is Json Stringify to convert to Yaml

## Usage

``` yaml
-  - name: Create-Yaml-Service
      uses: prosperTo/create-yaml@main
      with:
        file-name: 'service'
        type: '.yaml'
        params: '{"apiVersion":"v1","kind":"Service","metadata":{"name":"bus-service","namespace":"xxxxx","labels":{"app":"bus-app"}},"spec":{"type":"LoadBalancer","selector":{"app":"bus-app"},"ports":[{"protocol":"TCP","name":"http","port":5000,"targetPort":null}]}}'
```
