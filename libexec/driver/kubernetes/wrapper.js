/* jshint esversion: 6 */
'use strict';
const namespace = require('./clients/namespace.js');
const node = require('./clients/node.js');
const secret = require('./clients/secret.js');
const daemonset = require('./clients/daemonset.js');
const deployment = require('./clients/deployment.js');
const pod = require('./clients/pod.js');
const service = require('./clients/service.js');
const autoscale = require('./clients/autoscale.js');
const serviceaccount = require('./clients/serviceaccount.js');
const replicaset = require('./clients/replicaset.js');
const scale = require('./clients/scale.js');
const roleBinding = require('./clients/rolebinding.js');
const clusterRoleBinding = require('./clients/clusterrolebinding.js');
const clusterRole = require('./clients/clusterrole.js');
const apiService = require('./clients/apiservice.js');
const metrics = require('./clients/metrics.js');
const cronjob = require('./clients/cronjob.js');
const persistentvolumeclaim = require('./clients/persistentvolumeclaim.js');

const wrapper = {
	/**
	 * Namespace Wrapper
	 */
	namespace: namespace,
	
	/**
	 * Node Wrapper
	 */
	node: node,
	
	/**
	 * Secret Wrapper
	 */
	secret: secret,
	
	/**
	 * Daemonset Wrapper
	 */
	daemonset: daemonset,
	
	/**
	 * Deployment Wrapper
	 */
	deployment: deployment,
	
	/**
	 * Pod Wrapper
	 */
	pod: pod,
	
	/**
	 * Service Wrapper
	 */
	service: service,
	
	/**
	 * autoscale Wrapper
	 */
	autoscale: autoscale,
	
	/**
	 * serviceaccount Wrapper
	 */
	serviceaccount: serviceaccount,
	
	/**
	 * replicaset Wrapper
	 */
	replicaset: replicaset,
	
	/**
	 * Scale Wrapper
	 */
	scale: scale,
	
	/**
	 * rolebinding Wrapper
	 */
	roleBinding: roleBinding,
	
	/**
	 * clusterRoleBinding Wrapper
	 */
	clusterRoleBinding: clusterRoleBinding,
	
	/**
	 * clusterRole Wrapper
	 */
	clusterRole: clusterRole,
	
	/**
	 * apiService Wrapper
	 */
	apiService: apiService,
	
	/**
	 * metrics Wrapper
	 */
	metrics: metrics,
	
	/**
	 * cronJob Wrapper
	 */
	cronjob: cronjob,
	
	/**
	 * persistent volume claim Wrapper
	 */
	pvc: persistentvolumeclaim,
};

module.exports = wrapper;
