'use strict';

let doc = {
	"_id": "5dc96a639253d2193d55553d",
	"name": "Multitenant",
	"type": "service",
	"subtype": "soajs",
	"soajs": true,
	"description": "This recipe allows you to deploy a SOAJS Multitenant",
	"restriction": {
		"deployment": [
			"container"
		]
	},
	"recipe": {
		"deployOptions": {
			"image": {
				"prefix": "soajsorg",
				"name": "multitenant",
				"tag": "1.x",
				"pullPolicy": "Always",
				"repositoryType": "public",
				"override": true
			},
			"sourceCode": {},
			"certificates": "none",
			"readinessProbe": {
				"httpGet": {
					"path": "/heartbeat",
					"port": "maintenance"
				},
				"initialDelaySeconds": 5,
				"timeoutSeconds": 2,
				"periodSeconds": 5,
				"successThreshold": 1,
				"failureThreshold": 3
			},
			"ports": [],
			"voluming": [],
			"restartPolicy": {
				"condition": "any",
				"maxAttempts": 5
			},
			"container": {
				"network": "soajsnet",
				"workingDir": "/opt/soajs/soajs.multitenant/"
			},
			"allowExposeServicePort": false
		},
		"buildOptions": {
			"env": {
				"SOAJS_ENV": {
					"type": "computed",
					"value": "$SOAJS_ENV"
				},
				"SOAJS_DEPLOY_HA": {
					"type": "computed",
					"value": "$SOAJS_DEPLOY_HA"
				},
				"SOAJS_REGISTRY_API": {
					"type": "computed",
					"value": "$SOAJS_REGISTRY_API"
				},
				"SOAJS_BCRYPT" : {
					"type" : "static",
					"value" : "true"
				}
			},
			"settings": {
				"accelerateDeployment": false
			},
			"cmd": {
				"deploy": {
					"command": [
						"bash"
					],
					"args": [
						"-c",
						"node ."
					]
				}
			}
		}
	},
	"v": 1,
	"ts": new Date().getTime()
};
module.exports = doc;