var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.JointSpring' )
  var i2395 = data
  i2394.spring = i2395[0]
  i2394.damper = i2395[1]
  i2394.targetPosition = i2395[2]
  return i2394
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.JointMotor' )
  var i2397 = data
  i2396.m_TargetVelocity = i2397[0]
  i2396.m_Force = i2397[1]
  i2396.m_FreeSpin = i2397[2]
  return i2396
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.JointLimits' )
  var i2399 = data
  i2398.m_Min = i2399[0]
  i2398.m_Max = i2399[1]
  i2398.m_Bounciness = i2399[2]
  i2398.m_BounceMinVelocity = i2399[3]
  i2398.m_ContactDistance = i2399[4]
  i2398.minBounce = i2399[5]
  i2398.maxBounce = i2399[6]
  return i2398
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.JointDrive' )
  var i2401 = data
  i2400.m_PositionSpring = i2401[0]
  i2400.m_PositionDamper = i2401[1]
  i2400.m_MaximumForce = i2401[2]
  i2400.m_UseAcceleration = i2401[3]
  return i2400
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2402 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2403 = data
  i2402.m_Spring = i2403[0]
  i2402.m_Damper = i2403[1]
  return i2402
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2405 = data
  i2404.m_Limit = i2405[0]
  i2404.m_Bounciness = i2405[1]
  i2404.m_ContactDistance = i2405[2]
  return i2404
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2407 = data
  i2406.m_ExtremumSlip = i2407[0]
  i2406.m_ExtremumValue = i2407[1]
  i2406.m_AsymptoteSlip = i2407[2]
  i2406.m_AsymptoteValue = i2407[3]
  i2406.m_Stiffness = i2407[4]
  return i2406
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2408 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2409 = data
  i2408.m_LowerAngle = i2409[0]
  i2408.m_UpperAngle = i2409[1]
  return i2408
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2411 = data
  i2410.m_MotorSpeed = i2411[0]
  i2410.m_MaximumMotorTorque = i2411[1]
  return i2410
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2413 = data
  i2412.m_DampingRatio = i2413[0]
  i2412.m_Frequency = i2413[1]
  i2412.m_Angle = i2413[2]
  return i2412
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2414 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2415 = data
  i2414.m_LowerTranslation = i2415[0]
  i2414.m_UpperTranslation = i2415[1]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2417 = data
  i2416.position = new pc.Vec3( i2417[0], i2417[1], i2417[2] )
  i2416.scale = new pc.Vec3( i2417[3], i2417[4], i2417[5] )
  i2416.rotation = new pc.Quat(i2417[6], i2417[7], i2417[8], i2417[9])
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2419 = data
  i2418.enabled = !!i2419[0]
  request.r(i2419[1], i2419[2], 0, i2418, 'sharedMaterial')
  var i2421 = i2419[3]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 2) {
  request.r(i2421[i + 0], i2421[i + 1], 2, i2420, '')
  }
  i2418.sharedMaterials = i2420
  i2418.receiveShadows = !!i2419[4]
  i2418.shadowCastingMode = i2419[5]
  i2418.sortingLayerID = i2419[6]
  i2418.sortingOrder = i2419[7]
  i2418.lightmapIndex = i2419[8]
  i2418.lightmapSceneIndex = i2419[9]
  i2418.lightmapScaleOffset = new pc.Vec4( i2419[10], i2419[11], i2419[12], i2419[13] )
  i2418.lightProbeUsage = i2419[14]
  i2418.reflectionProbeUsage = i2419[15]
  i2418.color = new pc.Color(i2419[16], i2419[17], i2419[18], i2419[19])
  request.r(i2419[20], i2419[21], 0, i2418, 'sprite')
  i2418.flipX = !!i2419[22]
  i2418.flipY = !!i2419[23]
  i2418.drawMode = i2419[24]
  i2418.size = new pc.Vec2( i2419[25], i2419[26] )
  i2418.tileMode = i2419[27]
  i2418.adaptiveModeThreshold = i2419[28]
  i2418.maskInteraction = i2419[29]
  i2418.spriteSortPoint = i2419[30]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'animatorController')
  request.r(i2425[2], i2425[3], 0, i2424, 'avatar')
  i2424.updateMode = i2425[4]
  i2424.hasTransformHierarchy = !!i2425[5]
  i2424.applyRootMotion = !!i2425[6]
  var i2427 = i2425[7]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 2) {
  request.r(i2427[i + 0], i2427[i + 1], 2, i2426, '')
  }
  i2424.humanBones = i2426
  i2424.enabled = !!i2425[8]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2431 = data
  i2430.bodyType = i2431[0]
  request.r(i2431[1], i2431[2], 0, i2430, 'material')
  i2430.simulated = !!i2431[3]
  i2430.useAutoMass = !!i2431[4]
  i2430.mass = i2431[5]
  i2430.drag = i2431[6]
  i2430.angularDrag = i2431[7]
  i2430.gravityScale = i2431[8]
  i2430.collisionDetectionMode = i2431[9]
  i2430.sleepMode = i2431[10]
  i2430.constraints = i2431[11]
  return i2430
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2432 = root || request.c( 'PlayerController' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, '_manager')
  i2432.moveSpeed = i2433[2]
  request.r(i2433[3], i2433[4], 0, i2432, 'hand')
  request.r(i2433[5], i2433[6], 0, i2432, 'introText')
  request.r(i2433[7], i2433[8], 0, i2432, 'targetObj')
  var i2435 = i2433[9]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 2) {
  request.r(i2435[i + 0], i2435[i + 1], 2, i2434, '')
  }
  i2432.player = i2434
  request.r(i2433[10], i2433[11], 0, i2432, 'cam')
  i2432.offScreen = i2433[12]
  i2432.ClampledValue = i2433[13]
  request.r(i2433[14], i2433[15], 0, i2432, 'anim')
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2439 = data
  i2438.usedByComposite = !!i2439[0]
  i2438.autoTiling = !!i2439[1]
  i2438.size = new pc.Vec2( i2439[2], i2439[3] )
  i2438.edgeRadius = i2439[4]
  i2438.enabled = !!i2439[5]
  i2438.isTrigger = !!i2439[6]
  i2438.usedByEffector = !!i2439[7]
  i2438.density = i2439[8]
  i2438.offset = new pc.Vec2( i2439[9], i2439[10] )
  request.r(i2439[11], i2439[12], 0, i2438, 'material')
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2441 = data
  i2440.name = i2441[0]
  i2440.tagId = i2441[1]
  i2440.enabled = !!i2441[2]
  i2440.isStatic = !!i2441[3]
  i2440.layer = i2441[4]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2442 = root || new pc.UnityMaterial()
  var i2443 = data
  i2442.name = i2443[0]
  request.r(i2443[1], i2443[2], 0, i2442, 'shader')
  i2442.renderQueue = i2443[3]
  i2442.enableInstancing = !!i2443[4]
  var i2445 = i2443[5]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2445[i + 0]) );
  }
  i2442.floatParameters = i2444
  var i2447 = i2443[6]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2447[i + 0]) );
  }
  i2442.colorParameters = i2446
  var i2449 = i2443[7]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2449[i + 0]) );
  }
  i2442.vectorParameters = i2448
  var i2451 = i2443[8]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2451[i + 0]) );
  }
  i2442.textureParameters = i2450
  var i2453 = i2443[9]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2453[i + 0]) );
  }
  i2442.materialFlags = i2452
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2457 = data
  i2456.name = i2457[0]
  i2456.value = i2457[1]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2461 = data
  i2460.name = i2461[0]
  i2460.value = new pc.Color(i2461[1], i2461[2], i2461[3], i2461[4])
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2465 = data
  i2464.name = i2465[0]
  i2464.value = new pc.Vec4( i2465[1], i2465[2], i2465[3], i2465[4] )
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2469 = data
  i2468.name = i2469[0]
  request.r(i2469[1], i2469[2], 0, i2468, 'value')
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2473 = data
  i2472.name = i2473[0]
  i2472.enabled = !!i2473[1]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2475 = data
  i2474.name = i2475[0]
  i2474.width = i2475[1]
  i2474.height = i2475[2]
  i2474.mipmapCount = i2475[3]
  i2474.anisoLevel = i2475[4]
  i2474.filterMode = i2475[5]
  i2474.hdr = !!i2475[6]
  i2474.format = i2475[7]
  i2474.wrapMode = i2475[8]
  i2474.alphaIsTransparency = !!i2475[9]
  i2474.alphaSource = i2475[10]
  i2474.graphicsFormat = i2475[11]
  i2474.sRGBTexture = !!i2475[12]
  i2474.desiredColorSpace = i2475[13]
  i2474.wrapU = i2475[14]
  i2474.wrapV = i2475[15]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2477 = data
  i2476.pivot = new pc.Vec2( i2477[0], i2477[1] )
  i2476.anchorMin = new pc.Vec2( i2477[2], i2477[3] )
  i2476.anchorMax = new pc.Vec2( i2477[4], i2477[5] )
  i2476.sizeDelta = new pc.Vec2( i2477[6], i2477[7] )
  i2476.anchoredPosition3D = new pc.Vec3( i2477[8], i2477[9], i2477[10] )
  i2476.rotation = new pc.Quat(i2477[11], i2477[12], i2477[13], i2477[14])
  i2476.scale = new pc.Vec3( i2477[15], i2477[16], i2477[17] )
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2479 = data
  i2478.cullTransparentMesh = !!i2479[0]
  return i2478
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.UI.Image' )
  var i2481 = data
  request.r(i2481[0], i2481[1], 0, i2480, 'm_Sprite')
  i2480.m_Type = i2481[2]
  i2480.m_PreserveAspect = !!i2481[3]
  i2480.m_FillCenter = !!i2481[4]
  i2480.m_FillMethod = i2481[5]
  i2480.m_FillAmount = i2481[6]
  i2480.m_FillClockwise = !!i2481[7]
  i2480.m_FillOrigin = i2481[8]
  i2480.m_UseSpriteMesh = !!i2481[9]
  i2480.m_PixelsPerUnitMultiplier = i2481[10]
  request.r(i2481[11], i2481[12], 0, i2480, 'm_Material')
  i2480.m_Maskable = !!i2481[13]
  i2480.m_Color = new pc.Color(i2481[14], i2481[15], i2481[16], i2481[17])
  i2480.m_RaycastTarget = !!i2481[18]
  i2480.m_RaycastPadding = new pc.Vec4( i2481[19], i2481[20], i2481[21], i2481[22] )
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i2483 = data
  i2482.enabled = !!i2483[0]
  i2482.isTrigger = !!i2483[1]
  i2482.usedByEffector = !!i2483[2]
  i2482.density = i2483[3]
  i2482.offset = new pc.Vec2( i2483[4], i2483[5] )
  request.r(i2483[6], i2483[7], 0, i2482, 'material')
  i2482.edgeRadius = i2483[8]
  var i2485 = i2483[9]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 2) {
    i2484.push( new pc.Vec2( i2485[i + 0], i2485[i + 1] ) );
  }
  i2482.points = i2484
  i2482.useAdjacentStartPoint = !!i2483[10]
  i2482.adjacentStartPoint = new pc.Vec2( i2483[11], i2483[12] )
  i2482.useAdjacentEndPoint = !!i2483[13]
  i2482.adjacentEndPoint = new pc.Vec2( i2483[14], i2483[15] )
  return i2482
}

Deserializers["PlatformScript"] = function (request, data, root) {
  var i2488 = root || request.c( 'PlatformScript' )
  var i2489 = data
  i2488.jumpForce = i2489[0]
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PlatformEffector2D"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PlatformEffector2D' )
  var i2491 = data
  i2490.enabled = !!i2491[0]
  i2490.useColliderMask = !!i2491[1]
  i2490.colliderMask = i2491[2]
  return i2490
}

Deserializers["Shroom"] = function (request, data, root) {
  var i2492 = root || request.c( 'Shroom' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'particle')
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2495 = data
  i2494.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2495[0], i2494.main)
  i2494.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2495[1], i2494.colorBySpeed)
  i2494.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2495[2], i2494.colorOverLifetime)
  i2494.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2495[3], i2494.emission)
  i2494.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2495[4], i2494.rotationBySpeed)
  i2494.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2495[5], i2494.rotationOverLifetime)
  i2494.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2495[6], i2494.shape)
  i2494.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2495[7], i2494.sizeBySpeed)
  i2494.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2495[8], i2494.sizeOverLifetime)
  i2494.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2495[9], i2494.textureSheetAnimation)
  i2494.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2495[10], i2494.velocityOverLifetime)
  i2494.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2495[11], i2494.noise)
  i2494.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2495[12], i2494.inheritVelocity)
  i2494.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2495[13], i2494.forceOverLifetime)
  i2494.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2495[14], i2494.limitVelocityOverLifetime)
  i2494.useAutoRandomSeed = !!i2495[15]
  i2494.randomSeed = i2495[16]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2496 = root || new pc.ParticleSystemMain()
  var i2497 = data
  i2496.duration = i2497[0]
  i2496.loop = !!i2497[1]
  i2496.prewarm = !!i2497[2]
  i2496.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[3], i2496.startDelay)
  i2496.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[4], i2496.startLifetime)
  i2496.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[5], i2496.startSpeed)
  i2496.startSize3D = !!i2497[6]
  i2496.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[7], i2496.startSizeX)
  i2496.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[8], i2496.startSizeY)
  i2496.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[9], i2496.startSizeZ)
  i2496.startRotation3D = !!i2497[10]
  i2496.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[11], i2496.startRotationX)
  i2496.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[12], i2496.startRotationY)
  i2496.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[13], i2496.startRotationZ)
  i2496.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2497[14], i2496.startColor)
  i2496.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2497[15], i2496.gravityModifier)
  i2496.simulationSpace = i2497[16]
  request.r(i2497[17], i2497[18], 0, i2496, 'customSimulationSpace')
  i2496.simulationSpeed = i2497[19]
  i2496.useUnscaledTime = !!i2497[20]
  i2496.scalingMode = i2497[21]
  i2496.playOnAwake = !!i2497[22]
  i2496.maxParticles = i2497[23]
  i2496.emitterVelocityMode = i2497[24]
  i2496.stopAction = i2497[25]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2498 = root || new pc.MinMaxCurve()
  var i2499 = data
  i2498.mode = i2499[0]
  i2498.curveMin = new pc.AnimationCurve( { keys_flow: i2499[1] } )
  i2498.curveMax = new pc.AnimationCurve( { keys_flow: i2499[2] } )
  i2498.curveMultiplier = i2499[3]
  i2498.constantMin = i2499[4]
  i2498.constantMax = i2499[5]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2500 = root || new pc.MinMaxGradient()
  var i2501 = data
  i2500.mode = i2501[0]
  i2500.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2501[1], i2500.gradientMin)
  i2500.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2501[2], i2500.gradientMax)
  i2500.colorMin = new pc.Color(i2501[3], i2501[4], i2501[5], i2501[6])
  i2500.colorMax = new pc.Color(i2501[7], i2501[8], i2501[9], i2501[10])
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2503 = data
  i2502.mode = i2503[0]
  var i2505 = i2503[1]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2505[i + 0]) );
  }
  i2502.colorKeys = i2504
  var i2507 = i2503[2]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2507[i + 0]) );
  }
  i2502.alphaKeys = i2506
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2511 = data
  i2510.color = new pc.Color(i2511[0], i2511[1], i2511[2], i2511[3])
  i2510.time = i2511[4]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2515 = data
  i2514.alpha = i2515[0]
  i2514.time = i2515[1]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2516 = root || new pc.ParticleSystemColorBySpeed()
  var i2517 = data
  i2516.enabled = !!i2517[0]
  i2516.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2517[1], i2516.color)
  i2516.range = new pc.Vec2( i2517[2], i2517[3] )
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2518 = root || new pc.ParticleSystemColorOverLifetime()
  var i2519 = data
  i2518.enabled = !!i2519[0]
  i2518.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2519[1], i2518.color)
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2520 = root || new pc.ParticleSystemEmitter()
  var i2521 = data
  i2520.enabled = !!i2521[0]
  i2520.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2521[1], i2520.rateOverTime)
  i2520.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2521[2], i2520.rateOverDistance)
  var i2523 = i2521[3]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2523[i + 0]) );
  }
  i2520.bursts = i2522
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2526 = root || new pc.ParticleSystemBurst()
  var i2527 = data
  i2526.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2527[0], i2526.count)
  i2526.cycleCount = i2527[1]
  i2526.minCount = i2527[2]
  i2526.maxCount = i2527[3]
  i2526.repeatInterval = i2527[4]
  i2526.time = i2527[5]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2528 = root || new pc.ParticleSystemRotationBySpeed()
  var i2529 = data
  i2528.enabled = !!i2529[0]
  i2528.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2529[1], i2528.x)
  i2528.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2529[2], i2528.y)
  i2528.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2529[3], i2528.z)
  i2528.separateAxes = !!i2529[4]
  i2528.range = new pc.Vec2( i2529[5], i2529[6] )
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2530 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2531 = data
  i2530.enabled = !!i2531[0]
  i2530.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2531[1], i2530.x)
  i2530.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2531[2], i2530.y)
  i2530.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2531[3], i2530.z)
  i2530.separateAxes = !!i2531[4]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2532 = root || new pc.ParticleSystemShape()
  var i2533 = data
  i2532.enabled = !!i2533[0]
  i2532.shapeType = i2533[1]
  i2532.randomDirectionAmount = i2533[2]
  i2532.sphericalDirectionAmount = i2533[3]
  i2532.randomPositionAmount = i2533[4]
  i2532.alignToDirection = !!i2533[5]
  i2532.radius = i2533[6]
  i2532.radiusMode = i2533[7]
  i2532.radiusSpread = i2533[8]
  i2532.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[9], i2532.radiusSpeed)
  i2532.radiusThickness = i2533[10]
  i2532.angle = i2533[11]
  i2532.length = i2533[12]
  i2532.boxThickness = new pc.Vec3( i2533[13], i2533[14], i2533[15] )
  i2532.meshShapeType = i2533[16]
  request.r(i2533[17], i2533[18], 0, i2532, 'mesh')
  request.r(i2533[19], i2533[20], 0, i2532, 'meshRenderer')
  request.r(i2533[21], i2533[22], 0, i2532, 'skinnedMeshRenderer')
  i2532.useMeshMaterialIndex = !!i2533[23]
  i2532.meshMaterialIndex = i2533[24]
  i2532.useMeshColors = !!i2533[25]
  i2532.normalOffset = i2533[26]
  i2532.arc = i2533[27]
  i2532.arcMode = i2533[28]
  i2532.arcSpread = i2533[29]
  i2532.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[30], i2532.arcSpeed)
  i2532.donutRadius = i2533[31]
  i2532.position = new pc.Vec3( i2533[32], i2533[33], i2533[34] )
  i2532.rotation = new pc.Vec3( i2533[35], i2533[36], i2533[37] )
  i2532.scale = new pc.Vec3( i2533[38], i2533[39], i2533[40] )
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2534 = root || new pc.ParticleSystemSizeBySpeed()
  var i2535 = data
  i2534.enabled = !!i2535[0]
  i2534.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[1], i2534.x)
  i2534.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[2], i2534.y)
  i2534.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[3], i2534.z)
  i2534.separateAxes = !!i2535[4]
  i2534.range = new pc.Vec2( i2535[5], i2535[6] )
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2536 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2537 = data
  i2536.enabled = !!i2537[0]
  i2536.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2537[1], i2536.x)
  i2536.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2537[2], i2536.y)
  i2536.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2537[3], i2536.z)
  i2536.separateAxes = !!i2537[4]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2538 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2539 = data
  i2538.enabled = !!i2539[0]
  i2538.mode = i2539[1]
  i2538.animation = i2539[2]
  i2538.numTilesX = i2539[3]
  i2538.numTilesY = i2539[4]
  i2538.useRandomRow = !!i2539[5]
  i2538.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2539[6], i2538.frameOverTime)
  i2538.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2539[7], i2538.startFrame)
  i2538.cycleCount = i2539[8]
  i2538.rowIndex = i2539[9]
  i2538.flipU = i2539[10]
  i2538.flipV = i2539[11]
  i2538.spriteCount = i2539[12]
  var i2541 = i2539[13]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 2) {
  request.r(i2541[i + 0], i2541[i + 1], 2, i2540, '')
  }
  i2538.sprites = i2540
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2542 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2543 = data
  i2542.enabled = !!i2543[0]
  i2542.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[1], i2542.x)
  i2542.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[2], i2542.y)
  i2542.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[3], i2542.z)
  i2542.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[4], i2542.radial)
  i2542.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[5], i2542.speedModifier)
  i2542.space = i2543[6]
  i2542.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[7], i2542.orbitalX)
  i2542.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[8], i2542.orbitalY)
  i2542.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[9], i2542.orbitalZ)
  i2542.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[10], i2542.orbitalOffsetX)
  i2542.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[11], i2542.orbitalOffsetY)
  i2542.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[12], i2542.orbitalOffsetZ)
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2544 = root || new pc.ParticleSystemNoise()
  var i2545 = data
  i2544.enabled = !!i2545[0]
  i2544.separateAxes = !!i2545[1]
  i2544.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[2], i2544.strengthX)
  i2544.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[3], i2544.strengthY)
  i2544.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[4], i2544.strengthZ)
  i2544.frequency = i2545[5]
  i2544.damping = !!i2545[6]
  i2544.octaveCount = i2545[7]
  i2544.octaveMultiplier = i2545[8]
  i2544.octaveScale = i2545[9]
  i2544.quality = i2545[10]
  i2544.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[11], i2544.scrollSpeed)
  i2544.scrollSpeedMultiplier = i2545[12]
  i2544.remapEnabled = !!i2545[13]
  i2544.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[14], i2544.remapX)
  i2544.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[15], i2544.remapY)
  i2544.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[16], i2544.remapZ)
  i2544.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[17], i2544.positionAmount)
  i2544.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[18], i2544.rotationAmount)
  i2544.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[19], i2544.sizeAmount)
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2546 = root || new pc.ParticleSystemInheritVelocity()
  var i2547 = data
  i2546.enabled = !!i2547[0]
  i2546.mode = i2547[1]
  i2546.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2547[2], i2546.curve)
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2548 = root || new pc.ParticleSystemForceOverLifetime()
  var i2549 = data
  i2548.enabled = !!i2549[0]
  i2548.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2549[1], i2548.x)
  i2548.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2549[2], i2548.y)
  i2548.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2549[3], i2548.z)
  i2548.space = i2549[4]
  i2548.randomized = !!i2549[5]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2550 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2551 = data
  i2550.enabled = !!i2551[0]
  i2550.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[1], i2550.limit)
  i2550.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[2], i2550.limitX)
  i2550.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[3], i2550.limitY)
  i2550.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[4], i2550.limitZ)
  i2550.dampen = i2551[5]
  i2550.separateAxes = !!i2551[6]
  i2550.space = i2551[7]
  i2550.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[8], i2550.drag)
  i2550.multiplyDragByParticleSize = !!i2551[9]
  i2550.multiplyDragByParticleVelocity = !!i2551[10]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2553 = data
  i2552.enabled = !!i2553[0]
  request.r(i2553[1], i2553[2], 0, i2552, 'sharedMaterial')
  var i2555 = i2553[3]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 2) {
  request.r(i2555[i + 0], i2555[i + 1], 2, i2554, '')
  }
  i2552.sharedMaterials = i2554
  i2552.receiveShadows = !!i2553[4]
  i2552.shadowCastingMode = i2553[5]
  i2552.sortingLayerID = i2553[6]
  i2552.sortingOrder = i2553[7]
  i2552.lightmapIndex = i2553[8]
  i2552.lightmapSceneIndex = i2553[9]
  i2552.lightmapScaleOffset = new pc.Vec4( i2553[10], i2553[11], i2553[12], i2553[13] )
  i2552.lightProbeUsage = i2553[14]
  i2552.reflectionProbeUsage = i2553[15]
  request.r(i2553[16], i2553[17], 0, i2552, 'mesh')
  i2552.meshCount = i2553[18]
  i2552.activeVertexStreamsCount = i2553[19]
  i2552.alignment = i2553[20]
  i2552.renderMode = i2553[21]
  i2552.sortMode = i2553[22]
  i2552.lengthScale = i2553[23]
  i2552.velocityScale = i2553[24]
  i2552.cameraVelocityScale = i2553[25]
  i2552.normalDirection = i2553[26]
  i2552.sortingFudge = i2553[27]
  i2552.minParticleSize = i2553[28]
  i2552.maxParticleSize = i2553[29]
  i2552.pivot = new pc.Vec3( i2553[30], i2553[31], i2553[32] )
  request.r(i2553[33], i2553[34], 0, i2552, 'trailMaterial')
  return i2552
}

Deserializers["Winner"] = function (request, data, root) {
  var i2556 = root || request.c( 'Winner' )
  var i2557 = data
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2559 = data
  i2558.name = i2559[0]
  i2558.index = i2559[1]
  i2558.startup = !!i2559[2]
  return i2558
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2560 = root || request.c( 'GameManager' )
  var i2561 = data
  request.r(i2561[0], i2561[1], 0, i2560, 'player')
  request.r(i2561[2], i2561[3], 0, i2560, 'endCardTitle')
  request.r(i2561[4], i2561[5], 0, i2560, 'endDescription')
  request.r(i2561[6], i2561[7], 0, i2560, 'endInstall')
  request.r(i2561[8], i2561[9], 0, i2560, 'score')
  request.r(i2561[10], i2561[11], 0, i2560, 'Intro')
  request.r(i2561[12], i2561[13], 0, i2560, 'retry')
  request.r(i2561[14], i2561[15], 0, i2560, 'Target')
  request.r(i2561[16], i2561[17], 0, i2560, 'endCard')
  request.r(i2561[18], i2561[19], 0, i2560, 'introText')
  request.r(i2561[20], i2561[21], 0, i2560, 'Hand')
  request.r(i2561[22], i2561[23], 0, i2560, 'targetObj')
  request.r(i2561[24], i2561[25], 0, i2560, 'retryBtn')
  i2560.title = i2561[26]
  i2560.description = i2561[27]
  i2560.installText = i2561[28]
  i2560.retryText = i2561[29]
  i2560.IntroText = i2561[30]
  i2560.targetText = i2561[31]
  i2560.textColours = new pc.Color(i2561[32], i2561[33], i2561[34], i2561[35])
  i2560.type = i2561[36]
  request.r(i2561[37], i2561[38], 0, i2560, 'iconTex')
  i2560.maxCount = i2561[39]
  request.r(i2561[40], i2561[41], 0, i2560, 'iconIMG')
  return i2560
}

Deserializers["PauseManager"] = function (request, data, root) {
  var i2562 = root || request.c( 'PauseManager' )
  var i2563 = data
  return i2562
}

Deserializers["LevelGenerator"] = function (request, data, root) {
  var i2564 = root || request.c( 'LevelGenerator' )
  var i2565 = data
  request.r(i2565[0], i2565[1], 0, i2564, 'platform')
  request.r(i2565[2], i2565[3], 0, i2564, 'mushroom')
  i2564.spawnHeight = i2565[4]
  i2564.division = i2565[5]
  i2564.numberOfPlatform = i2565[6]
  i2564.levelWidth = i2565[7]
  i2564.minY = i2565[8]
  i2564.maxY = i2565[9]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2567 = data
  i2566.enabled = !!i2567[0]
  i2566.aspect = i2567[1]
  i2566.orthographic = !!i2567[2]
  i2566.orthographicSize = i2567[3]
  i2566.backgroundColor = new pc.Color(i2567[4], i2567[5], i2567[6], i2567[7])
  i2566.nearClipPlane = i2567[8]
  i2566.farClipPlane = i2567[9]
  i2566.fieldOfView = i2567[10]
  i2566.depth = i2567[11]
  i2566.clearFlags = i2567[12]
  i2566.cullingMask = i2567[13]
  i2566.rect = i2567[14]
  request.r(i2567[15], i2567[16], 0, i2566, 'targetTexture')
  i2566.usePhysicalProperties = !!i2567[17]
  i2566.focalLength = i2567[18]
  i2566.sensorSize = new pc.Vec2( i2567[19], i2567[20] )
  i2566.lensShift = new pc.Vec2( i2567[21], i2567[22] )
  i2566.gateFit = i2567[23]
  i2566.commandBufferCount = i2567[24]
  i2566.cameraType = i2567[25]
  return i2566
}

Deserializers["CamraFollow"] = function (request, data, root) {
  var i2568 = root || request.c( 'CamraFollow' )
  var i2569 = data
  request.r(i2569[0], i2569[1], 0, i2568, 'target')
  i2568.smoothSpeed = i2569[2]
  return i2568
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2571 = data
  i2570.m_RenderShadows = !!i2571[0]
  i2570.m_RequiresDepthTextureOption = i2571[1]
  i2570.m_RequiresOpaqueTextureOption = i2571[2]
  i2570.m_CameraType = i2571[3]
  var i2573 = i2571[4]
  var i2572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2573.length; i += 2) {
  request.r(i2573[i + 0], i2573[i + 1], 1, i2572, '')
  }
  i2570.m_Cameras = i2572
  i2570.m_RendererIndex = i2571[5]
  i2570.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2571[6] )
  request.r(i2571[7], i2571[8], 0, i2570, 'm_VolumeTrigger')
  i2570.m_VolumeFrameworkUpdateModeOption = i2571[9]
  i2570.m_RenderPostProcessing = !!i2571[10]
  i2570.m_Antialiasing = i2571[11]
  i2570.m_AntialiasingQuality = i2571[12]
  i2570.m_StopNaN = !!i2571[13]
  i2570.m_Dithering = !!i2571[14]
  i2570.m_ClearDepth = !!i2571[15]
  i2570.m_AllowXRRendering = !!i2571[16]
  i2570.m_AllowHDROutput = !!i2571[17]
  i2570.m_UseScreenCoordOverride = !!i2571[18]
  i2570.m_ScreenSizeOverride = new pc.Vec4( i2571[19], i2571[20], i2571[21], i2571[22] )
  i2570.m_ScreenCoordScaleBias = new pc.Vec4( i2571[23], i2571[24], i2571[25], i2571[26] )
  i2570.m_RequiresDepthTexture = !!i2571[27]
  i2570.m_RequiresColorTexture = !!i2571[28]
  i2570.m_Version = i2571[29]
  i2570.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i2571[30], i2570.m_TaaSettings)
  return i2570
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2577 = data
  i2576.m_Quality = i2577[0]
  i2576.m_FrameInfluence = i2577[1]
  i2576.m_JitterScale = i2577[2]
  i2576.m_MipBias = i2577[3]
  i2576.m_VarianceClampScale = i2577[4]
  i2576.m_ContrastAdaptiveSharpening = i2577[5]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2579 = data
  i2578.enabled = !!i2579[0]
  i2578.planeDistance = i2579[1]
  i2578.referencePixelsPerUnit = i2579[2]
  i2578.isFallbackOverlay = !!i2579[3]
  i2578.renderMode = i2579[4]
  i2578.renderOrder = i2579[5]
  i2578.sortingLayerName = i2579[6]
  i2578.sortingOrder = i2579[7]
  i2578.scaleFactor = i2579[8]
  request.r(i2579[9], i2579[10], 0, i2578, 'worldCamera')
  i2578.overrideSorting = !!i2579[11]
  i2578.pixelPerfect = !!i2579[12]
  i2578.targetDisplay = i2579[13]
  i2578.overridePixelPerfect = !!i2579[14]
  return i2578
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2581 = data
  i2580.m_UiScaleMode = i2581[0]
  i2580.m_ReferencePixelsPerUnit = i2581[1]
  i2580.m_ScaleFactor = i2581[2]
  i2580.m_ReferenceResolution = new pc.Vec2( i2581[3], i2581[4] )
  i2580.m_ScreenMatchMode = i2581[5]
  i2580.m_MatchWidthOrHeight = i2581[6]
  i2580.m_PhysicalUnit = i2581[7]
  i2580.m_FallbackScreenDPI = i2581[8]
  i2580.m_DefaultSpriteDPI = i2581[9]
  i2580.m_DynamicPixelsPerUnit = i2581[10]
  i2580.m_PresetInfoIsWorld = !!i2581[11]
  return i2580
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2582 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2583 = data
  i2582.m_IgnoreReversedGraphics = !!i2583[0]
  i2582.m_BlockingObjects = i2583[1]
  i2582.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2583[2] )
  return i2582
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2584 = root || request.c( 'UnityEngine.UI.Text' )
  var i2585 = data
  i2584.m_FontData = request.d('UnityEngine.UI.FontData', i2585[0], i2584.m_FontData)
  i2584.m_Text = i2585[1]
  request.r(i2585[2], i2585[3], 0, i2584, 'm_Material')
  i2584.m_Maskable = !!i2585[4]
  i2584.m_Color = new pc.Color(i2585[5], i2585[6], i2585[7], i2585[8])
  i2584.m_RaycastTarget = !!i2585[9]
  i2584.m_RaycastPadding = new pc.Vec4( i2585[10], i2585[11], i2585[12], i2585[13] )
  return i2584
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2586 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2587 = data
  request.r(i2587[0], i2587[1], 0, i2586, 'm_Font')
  i2586.m_FontSize = i2587[2]
  i2586.m_FontStyle = i2587[3]
  i2586.m_BestFit = !!i2587[4]
  i2586.m_MinSize = i2587[5]
  i2586.m_MaxSize = i2587[6]
  i2586.m_Alignment = i2587[7]
  i2586.m_AlignByGeometry = !!i2587[8]
  i2586.m_RichText = !!i2587[9]
  i2586.m_HorizontalOverflow = i2587[10]
  i2586.m_VerticalOverflow = i2587[11]
  i2586.m_LineSpacing = i2587[12]
  return i2586
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2588 = root || request.c( 'UnityEngine.UI.Button' )
  var i2589 = data
  i2588.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2589[0], i2588.m_OnClick)
  i2588.m_Navigation = request.d('UnityEngine.UI.Navigation', i2589[1], i2588.m_Navigation)
  i2588.m_Transition = i2589[2]
  i2588.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2589[3], i2588.m_Colors)
  i2588.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2589[4], i2588.m_SpriteState)
  i2588.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2589[5], i2588.m_AnimationTriggers)
  i2588.m_Interactable = !!i2589[6]
  request.r(i2589[7], i2589[8], 0, i2588, 'm_TargetGraphic')
  return i2588
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2591 = data
  i2590.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2591[0], i2590.m_PersistentCalls)
  return i2590
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2592 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2593 = data
  var i2595 = i2593[0]
  var i2594 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.add(request.d('UnityEngine.Events.PersistentCall', i2595[i + 0]));
  }
  i2592.m_Calls = i2594
  return i2592
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2599 = data
  request.r(i2599[0], i2599[1], 0, i2598, 'm_Target')
  i2598.m_TargetAssemblyTypeName = i2599[2]
  i2598.m_MethodName = i2599[3]
  i2598.m_Mode = i2599[4]
  i2598.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2599[5], i2598.m_Arguments)
  i2598.m_CallState = i2599[6]
  return i2598
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2600 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2601 = data
  request.r(i2601[0], i2601[1], 0, i2600, 'm_ObjectArgument')
  i2600.m_ObjectArgumentAssemblyTypeName = i2601[2]
  i2600.m_IntArgument = i2601[3]
  i2600.m_FloatArgument = i2601[4]
  i2600.m_StringArgument = i2601[5]
  i2600.m_BoolArgument = !!i2601[6]
  return i2600
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2602 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2603 = data
  i2602.m_Mode = i2603[0]
  i2602.m_WrapAround = !!i2603[1]
  request.r(i2603[2], i2603[3], 0, i2602, 'm_SelectOnUp')
  request.r(i2603[4], i2603[5], 0, i2602, 'm_SelectOnDown')
  request.r(i2603[6], i2603[7], 0, i2602, 'm_SelectOnLeft')
  request.r(i2603[8], i2603[9], 0, i2602, 'm_SelectOnRight')
  return i2602
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2604 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2605 = data
  i2604.m_NormalColor = new pc.Color(i2605[0], i2605[1], i2605[2], i2605[3])
  i2604.m_HighlightedColor = new pc.Color(i2605[4], i2605[5], i2605[6], i2605[7])
  i2604.m_PressedColor = new pc.Color(i2605[8], i2605[9], i2605[10], i2605[11])
  i2604.m_SelectedColor = new pc.Color(i2605[12], i2605[13], i2605[14], i2605[15])
  i2604.m_DisabledColor = new pc.Color(i2605[16], i2605[17], i2605[18], i2605[19])
  i2604.m_ColorMultiplier = i2605[20]
  i2604.m_FadeDuration = i2605[21]
  return i2604
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2606 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2607 = data
  request.r(i2607[0], i2607[1], 0, i2606, 'm_HighlightedSprite')
  request.r(i2607[2], i2607[3], 0, i2606, 'm_PressedSprite')
  request.r(i2607[4], i2607[5], 0, i2606, 'm_SelectedSprite')
  request.r(i2607[6], i2607[7], 0, i2606, 'm_DisabledSprite')
  return i2606
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2608 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2609 = data
  i2608.m_NormalTrigger = i2609[0]
  i2608.m_HighlightedTrigger = i2609[1]
  i2608.m_PressedTrigger = i2609[2]
  i2608.m_SelectedTrigger = i2609[3]
  i2608.m_DisabledTrigger = i2609[4]
  return i2608
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2611 = data
  request.r(i2611[0], i2611[1], 0, i2610, 'm_FirstSelected')
  i2610.m_sendNavigationEvents = !!i2611[2]
  i2610.m_DragThreshold = i2611[3]
  return i2610
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2613 = data
  i2612.m_HorizontalAxis = i2613[0]
  i2612.m_VerticalAxis = i2613[1]
  i2612.m_SubmitButton = i2613[2]
  i2612.m_CancelButton = i2613[3]
  i2612.m_InputActionsPerSecond = i2613[4]
  i2612.m_RepeatDelay = i2613[5]
  i2612.m_ForceModuleActive = !!i2613[6]
  i2612.m_SendPointerHoverToParent = !!i2613[7]
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2615 = data
  i2614.ambientIntensity = i2615[0]
  i2614.reflectionIntensity = i2615[1]
  i2614.ambientMode = i2615[2]
  i2614.ambientLight = new pc.Color(i2615[3], i2615[4], i2615[5], i2615[6])
  i2614.ambientSkyColor = new pc.Color(i2615[7], i2615[8], i2615[9], i2615[10])
  i2614.ambientGroundColor = new pc.Color(i2615[11], i2615[12], i2615[13], i2615[14])
  i2614.ambientEquatorColor = new pc.Color(i2615[15], i2615[16], i2615[17], i2615[18])
  i2614.fogColor = new pc.Color(i2615[19], i2615[20], i2615[21], i2615[22])
  i2614.fogEndDistance = i2615[23]
  i2614.fogStartDistance = i2615[24]
  i2614.fogDensity = i2615[25]
  i2614.fog = !!i2615[26]
  request.r(i2615[27], i2615[28], 0, i2614, 'skybox')
  i2614.fogMode = i2615[29]
  var i2617 = i2615[30]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2617[i + 0]) );
  }
  i2614.lightmaps = i2616
  i2614.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2615[31], i2614.lightProbes)
  i2614.lightmapsMode = i2615[32]
  i2614.mixedBakeMode = i2615[33]
  i2614.environmentLightingMode = i2615[34]
  i2614.ambientProbe = new pc.SphericalHarmonicsL2(i2615[35])
  i2614.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2615[36])
  i2614.useReferenceAmbientProbe = !!i2615[37]
  request.r(i2615[38], i2615[39], 0, i2614, 'customReflection')
  request.r(i2615[40], i2615[41], 0, i2614, 'defaultReflection')
  i2614.defaultReflectionMode = i2615[42]
  i2614.defaultReflectionResolution = i2615[43]
  i2614.sunLightObjectId = i2615[44]
  i2614.pixelLightCount = i2615[45]
  i2614.defaultReflectionHDR = !!i2615[46]
  i2614.hasLightDataAsset = !!i2615[47]
  i2614.hasManualGenerate = !!i2615[48]
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2621 = data
  request.r(i2621[0], i2621[1], 0, i2620, 'lightmapColor')
  request.r(i2621[2], i2621[3], 0, i2620, 'lightmapDirection')
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2622 = root || new UnityEngine.LightProbes()
  var i2623 = data
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, 'sharedMesh')
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2633 = data
  request.r(i2633[0], i2633[1], 0, i2632, 'additionalVertexStreams')
  i2632.enabled = !!i2633[2]
  request.r(i2633[3], i2633[4], 0, i2632, 'sharedMaterial')
  var i2635 = i2633[5]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 2) {
  request.r(i2635[i + 0], i2635[i + 1], 2, i2634, '')
  }
  i2632.sharedMaterials = i2634
  i2632.receiveShadows = !!i2633[6]
  i2632.shadowCastingMode = i2633[7]
  i2632.sortingLayerID = i2633[8]
  i2632.sortingOrder = i2633[9]
  i2632.lightmapIndex = i2633[10]
  i2632.lightmapSceneIndex = i2633[11]
  i2632.lightmapScaleOffset = new pc.Vec4( i2633[12], i2633[13], i2633[14], i2633[15] )
  i2632.lightProbeUsage = i2633[16]
  i2632.reflectionProbeUsage = i2633[17]
  return i2632
}

Deserializers["ShelfController"] = function (request, data, root) {
  var i2636 = root || request.c( 'ShelfController' )
  var i2637 = data
  var i2639 = i2637[0]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 2) {
  request.r(i2639[i + 0], i2639[i + 1], 2, i2638, '')
  }
  i2636.Goods = i2638
  var i2641 = i2637[1]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 2) {
  request.r(i2641[i + 0], i2641[i + 1], 2, i2640, '')
  }
  i2636.GoodsObjects = i2640
  var i2643 = i2637[2]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( !!i2643[i + 0] );
  }
  i2636.IsExist = i2642
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2651 = data
  i2650.center = new pc.Vec3( i2651[0], i2651[1], i2651[2] )
  i2650.size = new pc.Vec3( i2651[3], i2651[4], i2651[5] )
  i2650.enabled = !!i2651[6]
  i2650.isTrigger = !!i2651[7]
  request.r(i2651[8], i2651[9], 0, i2650, 'material')
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2653 = data
  i2652.name = i2653[0]
  i2652.halfPrecision = !!i2653[1]
  i2652.useUInt32IndexFormat = !!i2653[2]
  i2652.vertexCount = i2653[3]
  i2652.aabb = i2653[4]
  var i2655 = i2653[5]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.push( !!i2655[i + 0] );
  }
  i2652.streams = i2654
  i2652.vertices = i2653[6]
  var i2657 = i2653[7]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2657[i + 0]) );
  }
  i2652.subMeshes = i2656
  var i2659 = i2653[8]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 16) {
    i2658.push( new pc.Mat4().setData(i2659[i + 0], i2659[i + 1], i2659[i + 2], i2659[i + 3],  i2659[i + 4], i2659[i + 5], i2659[i + 6], i2659[i + 7],  i2659[i + 8], i2659[i + 9], i2659[i + 10], i2659[i + 11],  i2659[i + 12], i2659[i + 13], i2659[i + 14], i2659[i + 15]) );
  }
  i2652.bindposes = i2658
  var i2661 = i2653[9]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2661[i + 0]) );
  }
  i2652.blendShapes = i2660
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2665 = data
  i2664.triangles = i2665[0]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2671 = data
  i2670.name = i2671[0]
  var i2673 = i2671[1]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2673[i + 0]) );
  }
  i2670.frames = i2672
  return i2670
}

Deserializers["GoodsController"] = function (request, data, root) {
  var i2674 = root || request.c( 'GoodsController' )
  var i2675 = data
  i2674.CurrentIdx = i2675[0]
  i2674.CurrentLocalPosition = new pc.Vec3( i2675[1], i2675[2], i2675[3] )
  request.r(i2675[4], i2675[5], 0, i2674, 'CurrentShelf')
  return i2674
}

Deserializers["PopupWordController"] = function (request, data, root) {
  var i2676 = root || request.c( 'PopupWordController' )
  var i2677 = data
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2679 = data
  i2678.name = i2679[0]
  i2678.atlasId = i2679[1]
  i2678.mipmapCount = i2679[2]
  i2678.hdr = !!i2679[3]
  i2678.size = i2679[4]
  i2678.anisoLevel = i2679[5]
  i2678.filterMode = i2679[6]
  var i2681 = i2679[7]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 4) {
    i2680.push( UnityEngine.Rect.MinMaxRect(i2681[i + 0], i2681[i + 1], i2681[i + 2], i2681[i + 3]) );
  }
  i2678.rects = i2680
  i2678.wrapU = i2679[8]
  i2678.wrapV = i2679[9]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2685 = data
  i2684.enabled = !!i2685[0]
  i2684.type = i2685[1]
  i2684.color = new pc.Color(i2685[2], i2685[3], i2685[4], i2685[5])
  i2684.cullingMask = i2685[6]
  i2684.intensity = i2685[7]
  i2684.range = i2685[8]
  i2684.spotAngle = i2685[9]
  i2684.shadows = i2685[10]
  i2684.shadowNormalBias = i2685[11]
  i2684.shadowBias = i2685[12]
  i2684.shadowStrength = i2685[13]
  i2684.shadowResolution = i2685[14]
  i2684.lightmapBakeType = i2685[15]
  i2684.renderMode = i2685[16]
  request.r(i2685[17], i2685[18], 0, i2684, 'cookie')
  i2684.cookieSize = i2685[19]
  return i2684
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i2687 = data
  i2686.m_Version = i2687[0]
  i2686.m_UsePipelineSettings = !!i2687[1]
  i2686.m_AdditionalLightsShadowResolutionTier = i2687[2]
  i2686.m_LightLayerMask = i2687[3]
  i2686.m_RenderingLayers = i2687[4]
  i2686.m_CustomShadowLayers = !!i2687[5]
  i2686.m_ShadowLayerMask = i2687[6]
  i2686.m_ShadowRenderingLayers = i2687[7]
  i2686.m_LightCookieSize = new pc.Vec2( i2687[8], i2687[9] )
  i2686.m_LightCookieOffset = new pc.Vec2( i2687[10], i2687[11] )
  i2686.m_SoftShadowQuality = i2687[12]
  return i2686
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i2688 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i2689 = data
  i2688.priority = i2689[0]
  i2688.blendDistance = i2689[1]
  i2688.weight = i2689[2]
  request.r(i2689[3], i2689[4], 0, i2688, 'sharedProfile')
  i2688.m_IsGlobal = !!i2689[5]
  return i2688
}

Deserializers["PosController"] = function (request, data, root) {
  var i2690 = root || request.c( 'PosController' )
  var i2691 = data
  return i2690
}

Deserializers["MyGameManager"] = function (request, data, root) {
  var i2692 = root || request.c( 'MyGameManager' )
  var i2693 = data
  request.r(i2693[0], i2693[1], 0, i2692, 'PopupWordObject')
  request.r(i2693[2], i2693[3], 0, i2692, 'EndPanel')
  var i2695 = i2693[4]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 2) {
  request.r(i2695[i + 0], i2695[i + 1], 2, i2694, '')
  }
  i2692._shelfList = i2694
  return i2692
}

Deserializers["MouseInputController"] = function (request, data, root) {
  var i2698 = root || request.c( 'MouseInputController' )
  var i2699 = data
  return i2698
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i2701 = data
  request.r(i2701[0], i2701[1], 0, i2700, 'panelPrefab')
  var i2703 = i2701[2]
  var i2702 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i2703[i + 0]));
  }
  i2700.prefabs = i2702
  return i2700
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i2706 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i2707 = data
  i2706.type = i2707[0]
  request.r(i2707[1], i2707[2], 0, i2706, 'prefab')
  return i2706
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2708 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2709 = data
  i2708.m_Spacing = i2709[0]
  i2708.m_ChildForceExpandWidth = !!i2709[1]
  i2708.m_ChildForceExpandHeight = !!i2709[2]
  i2708.m_ChildControlWidth = !!i2709[3]
  i2708.m_ChildControlHeight = !!i2709[4]
  i2708.m_ChildScaleWidth = !!i2709[5]
  i2708.m_ChildScaleHeight = !!i2709[6]
  i2708.m_ReverseArrangement = !!i2709[7]
  i2708.m_Padding = UnityEngine.RectOffset.FromPaddings(i2709[8], i2709[9], i2709[10], i2709[11])
  i2708.m_ChildAlignment = i2709[12]
  return i2708
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2710 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2711 = data
  i2710.m_HorizontalFit = i2711[0]
  i2710.m_VerticalFit = i2711[1]
  return i2710
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i2712 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i2713 = data
  request.r(i2713[0], i2713[1], 0, i2712, 'contentHolder')
  return i2712
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i2714 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i2715 = data
  request.r(i2715[0], i2715[1], 0, i2714, 'nameLabel')
  request.r(i2715[2], i2715[3], 0, i2714, 'scrollRect')
  request.r(i2715[4], i2715[5], 0, i2714, 'viewport')
  request.r(i2715[6], i2715[7], 0, i2714, 'Canvas')
  return i2714
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2716 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2717 = data
  i2716.m_IgnoreLayout = !!i2717[0]
  i2716.m_MinWidth = i2717[1]
  i2716.m_MinHeight = i2717[2]
  i2716.m_PreferredWidth = i2717[3]
  i2716.m_PreferredHeight = i2717[4]
  i2716.m_FlexibleWidth = i2717[5]
  i2716.m_FlexibleHeight = i2717[6]
  i2716.m_LayoutPriority = i2717[7]
  return i2716
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2718 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2719 = data
  request.r(i2719[0], i2719[1], 0, i2718, 'm_Content')
  i2718.m_Horizontal = !!i2719[2]
  i2718.m_Vertical = !!i2719[3]
  i2718.m_MovementType = i2719[4]
  i2718.m_Elasticity = i2719[5]
  i2718.m_Inertia = !!i2719[6]
  i2718.m_DecelerationRate = i2719[7]
  i2718.m_ScrollSensitivity = i2719[8]
  request.r(i2719[9], i2719[10], 0, i2718, 'm_Viewport')
  request.r(i2719[11], i2719[12], 0, i2718, 'm_HorizontalScrollbar')
  request.r(i2719[13], i2719[14], 0, i2718, 'm_VerticalScrollbar')
  i2718.m_HorizontalScrollbarVisibility = i2719[15]
  i2718.m_VerticalScrollbarVisibility = i2719[16]
  i2718.m_HorizontalScrollbarSpacing = i2719[17]
  i2718.m_VerticalScrollbarSpacing = i2719[18]
  i2718.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2719[19], i2718.m_OnValueChanged)
  return i2718
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2720 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2721 = data
  i2720.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2721[0], i2720.m_PersistentCalls)
  return i2720
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2722 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2723 = data
  i2722.m_ShowMaskGraphic = !!i2723[0]
  return i2722
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i2724 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i2725 = data
  request.r(i2725[0], i2725[1], 0, i2724, 'm_HandleRect')
  i2724.m_Direction = i2725[2]
  i2724.m_Value = i2725[3]
  i2724.m_Size = i2725[4]
  i2724.m_NumberOfSteps = i2725[5]
  i2724.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i2725[6], i2724.m_OnValueChanged)
  i2724.m_Navigation = request.d('UnityEngine.UI.Navigation', i2725[7], i2724.m_Navigation)
  i2724.m_Transition = i2725[8]
  i2724.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2725[9], i2724.m_Colors)
  i2724.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2725[10], i2724.m_SpriteState)
  i2724.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2725[11], i2724.m_AnimationTriggers)
  i2724.m_Interactable = !!i2725[12]
  request.r(i2725[13], i2725[14], 0, i2724, 'm_TargetGraphic')
  return i2724
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i2726 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i2727 = data
  i2726.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2727[0], i2726.m_PersistentCalls)
  return i2726
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i2728 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i2729 = data
  var i2731 = i2729[0]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i2731[i + 0]));
  }
  i2728.m_Delegates = i2730
  return i2728
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i2734 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i2735 = data
  i2734.eventID = i2735[0]
  i2734.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i2735[1], i2734.callback)
  return i2734
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i2736 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i2737 = data
  i2736.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2737[0], i2736.m_PersistentCalls)
  return i2736
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i2738 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i2739 = data
  request.r(i2739[0], i2739[1], 0, i2738, 'nameLabel')
  request.r(i2739[2], i2739[3], 0, i2738, 'valueLabel')
  i2738.colorDefault = new pc.Color(i2739[4], i2739[5], i2739[6], i2739[7])
  i2738.colorSelected = new pc.Color(i2739[8], i2739[9], i2739[10], i2739[11])
  return i2738
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i2740 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i2741 = data
  request.r(i2741[0], i2741[1], 0, i2740, 'nameLabel')
  request.r(i2741[2], i2741[3], 0, i2740, 'valueToggle')
  request.r(i2741[4], i2741[5], 0, i2740, 'checkmarkImage')
  i2740.colorDefault = new pc.Color(i2741[6], i2741[7], i2741[8], i2741[9])
  i2740.colorSelected = new pc.Color(i2741[10], i2741[11], i2741[12], i2741[13])
  return i2740
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i2742 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i2743 = data
  i2742.toggleTransition = i2743[0]
  request.r(i2743[1], i2743[2], 0, i2742, 'graphic')
  i2742.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2743[3], i2742.onValueChanged)
  request.r(i2743[4], i2743[5], 0, i2742, 'm_Group')
  i2742.m_IsOn = !!i2743[6]
  i2742.m_Navigation = request.d('UnityEngine.UI.Navigation', i2743[7], i2742.m_Navigation)
  i2742.m_Transition = i2743[8]
  i2742.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2743[9], i2742.m_Colors)
  i2742.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2743[10], i2742.m_SpriteState)
  i2742.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2743[11], i2742.m_AnimationTriggers)
  i2742.m_Interactable = !!i2743[12]
  request.r(i2743[13], i2743[14], 0, i2742, 'm_TargetGraphic')
  return i2742
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i2744 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i2745 = data
  i2744.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2745[0], i2744.m_PersistentCalls)
  return i2744
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i2746 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i2747 = data
  request.r(i2747[0], i2747[1], 0, i2746, 'nameLabel')
  request.r(i2747[2], i2747[3], 0, i2746, 'valueLabel')
  i2746.colorDefault = new pc.Color(i2747[4], i2747[5], i2747[6], i2747[7])
  i2746.colorSelected = new pc.Color(i2747[8], i2747[9], i2747[10], i2747[11])
  return i2746
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i2748 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i2749 = data
  request.r(i2749[0], i2749[1], 0, i2748, 'nameLabel')
  request.r(i2749[2], i2749[3], 0, i2748, 'valueLabel')
  i2748.colorDefault = new pc.Color(i2749[4], i2749[5], i2749[6], i2749[7])
  i2748.colorSelected = new pc.Color(i2749[8], i2749[9], i2749[10], i2749[11])
  return i2748
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i2750 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i2751 = data
  request.r(i2751[0], i2751[1], 0, i2750, 'nameLabel')
  request.r(i2751[2], i2751[3], 0, i2750, 'valueLabel')
  i2750.colorDefault = new pc.Color(i2751[4], i2751[5], i2751[6], i2751[7])
  i2750.colorSelected = new pc.Color(i2751[8], i2751[9], i2751[10], i2751[11])
  return i2750
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i2752 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i2753 = data
  request.r(i2753[0], i2753[1], 0, i2752, 'nextButtonText')
  request.r(i2753[2], i2753[3], 0, i2752, 'previousButtonText')
  request.r(i2753[4], i2753[5], 0, i2752, 'nameLabel')
  request.r(i2753[6], i2753[7], 0, i2752, 'valueLabel')
  i2752.colorDefault = new pc.Color(i2753[8], i2753[9], i2753[10], i2753[11])
  i2752.colorSelected = new pc.Color(i2753[12], i2753[13], i2753[14], i2753[15])
  return i2752
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i2754 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i2755 = data
  request.r(i2755[0], i2755[1], 0, i2754, 'nameLabel')
  i2754.colorDefault = new pc.Color(i2755[2], i2755[3], i2755[4], i2755[5])
  i2754.colorSelected = new pc.Color(i2755[6], i2755[7], i2755[8], i2755[9])
  return i2754
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i2756 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i2757 = data
  request.r(i2757[0], i2757[1], 0, i2756, 'nameLabel')
  request.r(i2757[2], i2757[3], 0, i2756, 'valueToggle')
  i2756.colorDefault = new pc.Color(i2757[4], i2757[5], i2757[6], i2757[7])
  i2756.colorSelected = new pc.Color(i2757[8], i2757[9], i2757[10], i2757[11])
  return i2756
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i2758 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i2759 = data
  i2758.toggleTransition = i2759[0]
  request.r(i2759[1], i2759[2], 0, i2758, 'graphic')
  i2758.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2759[3], i2758.onValueChanged)
  request.r(i2759[4], i2759[5], 0, i2758, 'content')
  request.r(i2759[6], i2759[7], 0, i2758, 'arrowOpened')
  request.r(i2759[8], i2759[9], 0, i2758, 'arrowClosed')
  request.r(i2759[10], i2759[11], 0, i2758, 'm_Group')
  i2758.m_IsOn = !!i2759[12]
  i2758.m_Navigation = request.d('UnityEngine.UI.Navigation', i2759[13], i2758.m_Navigation)
  i2758.m_Transition = i2759[14]
  i2758.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2759[15], i2758.m_Colors)
  i2758.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2759[16], i2758.m_SpriteState)
  i2758.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2759[17], i2758.m_AnimationTriggers)
  i2758.m_Interactable = !!i2759[18]
  request.r(i2759[19], i2759[20], 0, i2758, 'm_TargetGraphic')
  return i2758
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i2760 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i2761 = data
  request.r(i2761[0], i2761[1], 0, i2760, 'nameLabel')
  request.r(i2761[2], i2761[3], 0, i2760, 'valueToggle')
  request.r(i2761[4], i2761[5], 0, i2760, 'colorImage')
  request.r(i2761[6], i2761[7], 0, i2760, 'fieldR')
  request.r(i2761[8], i2761[9], 0, i2760, 'fieldG')
  request.r(i2761[10], i2761[11], 0, i2760, 'fieldB')
  request.r(i2761[12], i2761[13], 0, i2760, 'fieldA')
  i2760.colorDefault = new pc.Color(i2761[14], i2761[15], i2761[16], i2761[17])
  i2760.colorSelected = new pc.Color(i2761[18], i2761[19], i2761[20], i2761[21])
  return i2760
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i2762 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i2763 = data
  request.r(i2763[0], i2763[1], 0, i2762, 'nameLabel')
  request.r(i2763[2], i2763[3], 0, i2762, 'valueLabel')
  i2762.colorDefault = new pc.Color(i2763[4], i2763[5], i2763[6], i2763[7])
  i2762.colorSelected = new pc.Color(i2763[8], i2763[9], i2763[10], i2763[11])
  return i2762
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i2764 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i2765 = data
  request.r(i2765[0], i2765[1], 0, i2764, 'nameLabel')
  request.r(i2765[2], i2765[3], 0, i2764, 'valueToggle')
  request.r(i2765[4], i2765[5], 0, i2764, 'fieldX')
  request.r(i2765[6], i2765[7], 0, i2764, 'fieldY')
  i2764.colorDefault = new pc.Color(i2765[8], i2765[9], i2765[10], i2765[11])
  i2764.colorSelected = new pc.Color(i2765[12], i2765[13], i2765[14], i2765[15])
  return i2764
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i2766 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i2767 = data
  request.r(i2767[0], i2767[1], 0, i2766, 'nameLabel')
  request.r(i2767[2], i2767[3], 0, i2766, 'valueToggle')
  request.r(i2767[4], i2767[5], 0, i2766, 'fieldX')
  request.r(i2767[6], i2767[7], 0, i2766, 'fieldY')
  request.r(i2767[8], i2767[9], 0, i2766, 'fieldZ')
  i2766.colorDefault = new pc.Color(i2767[10], i2767[11], i2767[12], i2767[13])
  i2766.colorSelected = new pc.Color(i2767[14], i2767[15], i2767[16], i2767[17])
  return i2766
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i2768 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i2769 = data
  request.r(i2769[0], i2769[1], 0, i2768, 'nameLabel')
  request.r(i2769[2], i2769[3], 0, i2768, 'valueToggle')
  request.r(i2769[4], i2769[5], 0, i2768, 'fieldX')
  request.r(i2769[6], i2769[7], 0, i2768, 'fieldY')
  request.r(i2769[8], i2769[9], 0, i2768, 'fieldZ')
  request.r(i2769[10], i2769[11], 0, i2768, 'fieldW')
  i2768.colorDefault = new pc.Color(i2769[12], i2769[13], i2769[14], i2769[15])
  i2768.colorSelected = new pc.Color(i2769[16], i2769[17], i2769[18], i2769[19])
  return i2768
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i2770 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i2771 = data
  i2770.colorDefault = new pc.Color(i2771[0], i2771[1], i2771[2], i2771[3])
  i2770.colorSelected = new pc.Color(i2771[4], i2771[5], i2771[6], i2771[7])
  return i2770
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2772 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2773 = data
  i2772.m_Spacing = i2773[0]
  i2772.m_ChildForceExpandWidth = !!i2773[1]
  i2772.m_ChildForceExpandHeight = !!i2773[2]
  i2772.m_ChildControlWidth = !!i2773[3]
  i2772.m_ChildControlHeight = !!i2773[4]
  i2772.m_ChildScaleWidth = !!i2773[5]
  i2772.m_ChildScaleHeight = !!i2773[6]
  i2772.m_ReverseArrangement = !!i2773[7]
  i2772.m_Padding = UnityEngine.RectOffset.FromPaddings(i2773[8], i2773[9], i2773[10], i2773[11])
  i2772.m_ChildAlignment = i2773[12]
  return i2772
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i2774 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i2775 = data
  i2774.colorDefault = new pc.Color(i2775[0], i2775[1], i2775[2], i2775[3])
  i2774.colorSelected = new pc.Color(i2775[4], i2775[5], i2775[6], i2775[7])
  return i2774
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i2776 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i2777 = data
  request.r(i2777[0], i2777[1], 0, i2776, 'nameLabel')
  request.r(i2777[2], i2777[3], 0, i2776, 'header')
  i2776.colorDefault = new pc.Color(i2777[4], i2777[5], i2777[6], i2777[7])
  i2776.colorSelected = new pc.Color(i2777[8], i2777[9], i2777[10], i2777[11])
  return i2776
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i2778 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i2779 = data
  request.r(i2779[0], i2779[1], 0, i2778, 'nameLabel')
  request.r(i2779[2], i2779[3], 0, i2778, 'valueToggle')
  var i2781 = i2779[4]
  var i2780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i2781.length; i += 2) {
  request.r(i2781[i + 0], i2781[i + 1], 1, i2780, '')
  }
  i2778.toggles = i2780
  i2778.colorDefault = new pc.Color(i2779[5], i2779[6], i2779[7], i2779[8])
  i2778.colorSelected = new pc.Color(i2779[9], i2779[10], i2779[11], i2779[12])
  return i2778
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i2784 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i2785 = data
  request.r(i2785[0], i2785[1], 0, i2784, 'nameLabel')
  request.r(i2785[2], i2785[3], 0, i2784, 'valueToggle')
  request.r(i2785[4], i2785[5], 0, i2784, 'checkmarkImage')
  i2784.colorDefault = new pc.Color(i2785[6], i2785[7], i2785[8], i2785[9])
  i2784.colorSelected = new pc.Color(i2785[10], i2785[11], i2785[12], i2785[13])
  return i2784
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i2786 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i2787 = data
  request.r(i2787[0], i2787[1], 0, i2786, 'nameLabel')
  request.r(i2787[2], i2787[3], 0, i2786, 'valueToggle')
  request.r(i2787[4], i2787[5], 0, i2786, 'checkmarkImage')
  i2786.colorDefault = new pc.Color(i2787[6], i2787[7], i2787[8], i2787[9])
  i2786.colorSelected = new pc.Color(i2787[10], i2787[11], i2787[12], i2787[13])
  return i2786
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i2788 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i2789 = data
  request.r(i2789[0], i2789[1], 0, i2788, 'nextButtonText')
  request.r(i2789[2], i2789[3], 0, i2788, 'previousButtonText')
  request.r(i2789[4], i2789[5], 0, i2788, 'nameLabel')
  request.r(i2789[6], i2789[7], 0, i2788, 'valueLabel')
  i2788.colorDefault = new pc.Color(i2789[8], i2789[9], i2789[10], i2789[11])
  i2788.colorSelected = new pc.Color(i2789[12], i2789[13], i2789[14], i2789[15])
  return i2788
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i2790 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i2791 = data
  request.r(i2791[0], i2791[1], 0, i2790, 'nameLabel')
  request.r(i2791[2], i2791[3], 0, i2790, 'valueToggle')
  i2790.colorDefault = new pc.Color(i2791[4], i2791[5], i2791[6], i2791[7])
  i2790.colorSelected = new pc.Color(i2791[8], i2791[9], i2791[10], i2791[11])
  return i2790
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i2792 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i2793 = data
  request.r(i2793[0], i2793[1], 0, i2792, 'nameLabel')
  i2792.colorDefault = new pc.Color(i2793[2], i2793[3], i2793[4], i2793[5])
  i2792.colorSelected = new pc.Color(i2793[6], i2793[7], i2793[8], i2793[9])
  return i2792
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i2794 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i2795 = data
  request.r(i2795[0], i2795[1], 0, i2794, 'nameLabel')
  request.r(i2795[2], i2795[3], 0, i2794, 'valueLabel')
  request.r(i2795[4], i2795[5], 0, i2794, 'progressBarRect')
  i2794.colorDefault = new pc.Color(i2795[6], i2795[7], i2795[8], i2795[9])
  i2794.colorSelected = new pc.Color(i2795[10], i2795[11], i2795[12], i2795[13])
  return i2794
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i2796 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i2797 = data
  request.r(i2797[0], i2797[1], 0, i2796, 'nameLabel')
  request.r(i2797[2], i2797[3], 0, i2796, 'valueLabel')
  i2796.colorDefault = new pc.Color(i2797[4], i2797[5], i2797[6], i2797[7])
  i2796.colorSelected = new pc.Color(i2797[8], i2797[9], i2797[10], i2797[11])
  return i2796
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i2798 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i2799 = data
  request.r(i2799[0], i2799[1], 0, i2798, 'nameLabel')
  request.r(i2799[2], i2799[3], 0, i2798, 'valueLabel')
  i2798.colorDefault = new pc.Color(i2799[4], i2799[5], i2799[6], i2799[7])
  i2798.colorSelected = new pc.Color(i2799[8], i2799[9], i2799[10], i2799[11])
  return i2798
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i2800 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i2801 = data
  request.r(i2801[0], i2801[1], 0, i2800, 'nextButtonText')
  request.r(i2801[2], i2801[3], 0, i2800, 'previousButtonText')
  request.r(i2801[4], i2801[5], 0, i2800, 'nameLabel')
  request.r(i2801[6], i2801[7], 0, i2800, 'valueLabel')
  i2800.colorDefault = new pc.Color(i2801[8], i2801[9], i2801[10], i2801[11])
  i2800.colorSelected = new pc.Color(i2801[12], i2801[13], i2801[14], i2801[15])
  return i2800
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i2802 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i2803 = data
  request.r(i2803[0], i2803[1], 0, i2802, 'nextButtonText')
  request.r(i2803[2], i2803[3], 0, i2802, 'previousButtonText')
  request.r(i2803[4], i2803[5], 0, i2802, 'nameLabel')
  request.r(i2803[6], i2803[7], 0, i2802, 'valueLabel')
  i2802.colorDefault = new pc.Color(i2803[8], i2803[9], i2803[10], i2803[11])
  i2802.colorSelected = new pc.Color(i2803[12], i2803[13], i2803[14], i2803[15])
  return i2802
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i2804 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i2805 = data
  request.r(i2805[0], i2805[1], 0, i2804, 'panel')
  request.r(i2805[2], i2805[3], 0, i2804, 'valuePrefab')
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2807 = data
  i2806.AdditionalLightsPerObjectLimit = i2807[0]
  i2806.AdditionalLightsRenderingMode = i2807[1]
  i2806.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2807[2], i2806.LightRenderingMode)
  i2806.ColorGradingLutSize = i2807[3]
  i2806.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i2807[4], i2806.ColorGradingMode)
  i2806.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2807[5], i2806.MainLightRenderingMode)
  i2806.MainLightRenderingModeValue = i2807[6]
  i2806.SupportsMainLightShadows = !!i2807[7]
  i2806.MixedLightingSupported = !!i2807[8]
  i2806.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i2807[9], i2806.MsaaQuality)
  i2806.MSAA = i2807[10]
  i2806.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i2807[11], i2806.OpaqueDownsampling)
  i2806.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i2807[12], i2806.MainLightShadowmapResolution)
  i2806.MainLightShadowmapResolutionValue = i2807[13]
  i2806.SupportsSoftShadows = !!i2807[14]
  i2806.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i2807[15], i2806.SoftShadowQuality)
  i2806.SoftShadowQualityValue = i2807[16]
  i2806.ShadowDistance = i2807[17]
  i2806.ShadowCascadeCount = i2807[18]
  i2806.Cascade2Split = i2807[19]
  i2806.Cascade3Split = new pc.Vec2( i2807[20], i2807[21] )
  i2806.Cascade4Split = new pc.Vec3( i2807[22], i2807[23], i2807[24] )
  i2806.CascadeBorder = i2807[25]
  i2806.ShadowDepthBias = i2807[26]
  i2806.ShadowNormalBias = i2807[27]
  i2806.RenderScale = i2807[28]
  i2806.RequireDepthTexture = !!i2807[29]
  i2806.RequireOpaqueTexture = !!i2807[30]
  i2806.SupportsHDR = !!i2807[31]
  i2806.SupportsTerrainHoles = !!i2807[32]
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2809 = data
  i2808.Disabled = i2809[0]
  i2808.PerVertex = i2809[1]
  i2808.PerPixel = i2809[2]
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i2811 = data
  i2810.LowDynamicRange = i2811[0]
  i2810.HighDynamicRange = i2811[1]
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i2813 = data
  i2812.Disabled = i2813[0]
  i2812._2x = i2813[1]
  i2812._4x = i2813[2]
  i2812._8x = i2813[3]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i2815 = data
  i2814.None = i2815[0]
  i2814._2xBilinear = i2815[1]
  i2814._4xBox = i2815[2]
  i2814._4xBilinear = i2815[3]
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i2817 = data
  i2816._256 = i2817[0]
  i2816._512 = i2817[1]
  i2816._1024 = i2817[2]
  i2816._2048 = i2817[3]
  i2816._4096 = i2817[4]
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i2819 = data
  i2818.UsePipelineSettings = i2819[0]
  i2818.Low = i2819[1]
  i2818.Medium = i2819[2]
  i2818.High = i2819[3]
  return i2818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2821 = data
  var i2823 = i2821[0]
  var i2822 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2823[i + 0]));
  }
  i2820.ShaderCompilationErrors = i2822
  i2820.name = i2821[1]
  i2820.guid = i2821[2]
  var i2825 = i2821[3]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( i2825[i + 0] );
  }
  i2820.shaderDefinedKeywords = i2824
  var i2827 = i2821[4]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2827[i + 0]) );
  }
  i2820.passes = i2826
  var i2829 = i2821[5]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2829[i + 0]) );
  }
  i2820.usePasses = i2828
  var i2831 = i2821[6]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2831[i + 0]) );
  }
  i2820.defaultParameterValues = i2830
  request.r(i2821[7], i2821[8], 0, i2820, 'unityFallbackShader')
  i2820.readDepth = !!i2821[9]
  i2820.isCreatedByShaderGraph = !!i2821[10]
  i2820.compiled = !!i2821[11]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2835 = data
  i2834.shaderName = i2835[0]
  i2834.errorMessage = i2835[1]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2840 = root || new pc.UnityShaderPass()
  var i2841 = data
  i2840.id = i2841[0]
  i2840.subShaderIndex = i2841[1]
  i2840.name = i2841[2]
  i2840.passType = i2841[3]
  i2840.grabPassTextureName = i2841[4]
  i2840.usePass = !!i2841[5]
  i2840.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2841[6], i2840.zTest)
  i2840.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2841[7], i2840.zWrite)
  i2840.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2841[8], i2840.culling)
  i2840.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2841[9], i2840.blending)
  i2840.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2841[10], i2840.alphaBlending)
  i2840.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2841[11], i2840.colorWriteMask)
  i2840.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2841[12], i2840.offsetUnits)
  i2840.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2841[13], i2840.offsetFactor)
  i2840.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2841[14], i2840.stencilRef)
  i2840.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2841[15], i2840.stencilReadMask)
  i2840.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2841[16], i2840.stencilWriteMask)
  i2840.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2841[17], i2840.stencilOp)
  i2840.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2841[18], i2840.stencilOpFront)
  i2840.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2841[19], i2840.stencilOpBack)
  var i2843 = i2841[20]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2843[i + 0]) );
  }
  i2840.tags = i2842
  var i2845 = i2841[21]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( i2845[i + 0] );
  }
  i2840.passDefinedKeywords = i2844
  var i2847 = i2841[22]
  var i2846 = []
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2847[i + 0]) );
  }
  i2840.passDefinedKeywordGroups = i2846
  var i2849 = i2841[23]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2849[i + 0]) );
  }
  i2840.variants = i2848
  var i2851 = i2841[24]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2851[i + 0]) );
  }
  i2840.excludedVariants = i2850
  i2840.hasDepthReader = !!i2841[25]
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2853 = data
  i2852.val = i2853[0]
  i2852.name = i2853[1]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2855 = data
  i2854.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2855[0], i2854.src)
  i2854.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2855[1], i2854.dst)
  i2854.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2855[2], i2854.op)
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2857 = data
  i2856.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2857[0], i2856.pass)
  i2856.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2857[1], i2856.fail)
  i2856.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2857[2], i2856.zFail)
  i2856.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2857[3], i2856.comp)
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2861 = data
  i2860.name = i2861[0]
  i2860.value = i2861[1]
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2865 = data
  var i2867 = i2865[0]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( i2867[i + 0] );
  }
  i2864.keywords = i2866
  i2864.hasDiscard = !!i2865[1]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2871 = data
  i2870.passId = i2871[0]
  i2870.subShaderIndex = i2871[1]
  var i2873 = i2871[2]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.push( i2873[i + 0] );
  }
  i2870.keywords = i2872
  i2870.vertexProgram = i2871[3]
  i2870.fragmentProgram = i2871[4]
  i2870.exportedForWebGl2 = !!i2871[5]
  i2870.readDepth = !!i2871[6]
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2877 = data
  request.r(i2877[0], i2877[1], 0, i2876, 'shader')
  i2876.pass = i2877[2]
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2881 = data
  i2880.name = i2881[0]
  i2880.type = i2881[1]
  i2880.value = new pc.Vec4( i2881[2], i2881[3], i2881[4], i2881[5] )
  i2880.textureValue = i2881[6]
  i2880.shaderPropertyFlag = i2881[7]
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2883 = data
  i2882.name = i2883[0]
  request.r(i2883[1], i2883[2], 0, i2882, 'texture')
  i2882.aabb = i2883[3]
  i2882.vertices = i2883[4]
  i2882.triangles = i2883[5]
  i2882.textureRect = UnityEngine.Rect.MinMaxRect(i2883[6], i2883[7], i2883[8], i2883[9])
  i2882.packedRect = UnityEngine.Rect.MinMaxRect(i2883[10], i2883[11], i2883[12], i2883[13])
  i2882.border = new pc.Vec4( i2883[14], i2883[15], i2883[16], i2883[17] )
  i2882.transparency = i2883[18]
  i2882.bounds = i2883[19]
  i2882.pixelsPerUnit = i2883[20]
  i2882.textureWidth = i2883[21]
  i2882.textureHeight = i2883[22]
  i2882.nativeSize = new pc.Vec2( i2883[23], i2883[24] )
  i2882.pivot = new pc.Vec2( i2883[25], i2883[26] )
  i2882.textureRectOffset = new pc.Vec2( i2883[27], i2883[28] )
  return i2882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2885 = data
  i2884.name = i2885[0]
  i2884.wrapMode = i2885[1]
  i2884.isLooping = !!i2885[2]
  i2884.length = i2885[3]
  var i2887 = i2885[4]
  var i2886 = []
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2887[i + 0]) );
  }
  i2884.curves = i2886
  var i2889 = i2885[5]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2889[i + 0]) );
  }
  i2884.events = i2888
  i2884.halfPrecision = !!i2885[6]
  i2884._frameRate = i2885[7]
  i2884.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2885[8], i2884.localBounds)
  i2884.hasMuscleCurves = !!i2885[9]
  var i2891 = i2885[10]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.push( i2891[i + 0] );
  }
  i2884.clipMuscleConstant = i2890
  i2884.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2885[11], i2884.clipBindingConstant)
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2895 = data
  i2894.path = i2895[0]
  i2894.hash = i2895[1]
  i2894.componentType = i2895[2]
  i2894.property = i2895[3]
  i2894.keys = i2895[4]
  var i2897 = i2895[5]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2897[i + 0]) );
  }
  i2894.objectReferenceKeys = i2896
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2901 = data
  i2900.time = i2901[0]
  request.r(i2901[1], i2901[2], 0, i2900, 'value')
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2905 = data
  i2904.functionName = i2905[0]
  i2904.floatParameter = i2905[1]
  i2904.intParameter = i2905[2]
  i2904.stringParameter = i2905[3]
  request.r(i2905[4], i2905[5], 0, i2904, 'objectReferenceParameter')
  i2904.time = i2905[6]
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2907 = data
  i2906.center = new pc.Vec3( i2907[0], i2907[1], i2907[2] )
  i2906.extends = new pc.Vec3( i2907[3], i2907[4], i2907[5] )
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2911 = data
  var i2913 = i2911[0]
  var i2912 = []
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.push( i2913[i + 0] );
  }
  i2910.genericBindings = i2912
  var i2915 = i2911[1]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.push( i2915[i + 0] );
  }
  i2910.pptrCurveMapping = i2914
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2917 = data
  i2916.name = i2917[0]
  i2916.ascent = i2917[1]
  i2916.originalLineHeight = i2917[2]
  i2916.fontSize = i2917[3]
  var i2919 = i2917[4]
  var i2918 = []
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2919[i + 0]) );
  }
  i2916.characterInfo = i2918
  request.r(i2917[5], i2917[6], 0, i2916, 'texture')
  i2916.originalFontSize = i2917[7]
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2923 = data
  i2922.index = i2923[0]
  i2922.advance = i2923[1]
  i2922.bearing = i2923[2]
  i2922.glyphWidth = i2923[3]
  i2922.glyphHeight = i2923[4]
  i2922.minX = i2923[5]
  i2922.maxX = i2923[6]
  i2922.minY = i2923[7]
  i2922.maxY = i2923[8]
  i2922.uvBottomLeftX = i2923[9]
  i2922.uvBottomLeftY = i2923[10]
  i2922.uvBottomRightX = i2923[11]
  i2922.uvBottomRightY = i2923[12]
  i2922.uvTopLeftX = i2923[13]
  i2922.uvTopLeftY = i2923[14]
  i2922.uvTopRightX = i2923[15]
  i2922.uvTopRightY = i2923[16]
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2925 = data
  i2924.name = i2925[0]
  var i2927 = i2925[1]
  var i2926 = []
  for(var i = 0; i < i2927.length; i += 1) {
    i2926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2927[i + 0]) );
  }
  i2924.layers = i2926
  var i2929 = i2925[2]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2929[i + 0]) );
  }
  i2924.parameters = i2928
  i2924.animationClips = i2925[3]
  i2924.avatarUnsupported = i2925[4]
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2933 = data
  i2932.name = i2933[0]
  i2932.defaultWeight = i2933[1]
  i2932.blendingMode = i2933[2]
  i2932.avatarMask = i2933[3]
  i2932.syncedLayerIndex = i2933[4]
  i2932.syncedLayerAffectsTiming = !!i2933[5]
  i2932.syncedLayers = i2933[6]
  i2932.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2933[7], i2932.stateMachine)
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2935 = data
  i2934.id = i2935[0]
  i2934.name = i2935[1]
  i2934.path = i2935[2]
  var i2937 = i2935[3]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 1) {
    i2936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2937[i + 0]) );
  }
  i2934.states = i2936
  var i2939 = i2935[4]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 1) {
    i2938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2939[i + 0]) );
  }
  i2934.machines = i2938
  var i2941 = i2935[5]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2941[i + 0]) );
  }
  i2934.entryStateTransitions = i2940
  var i2943 = i2935[6]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 1) {
    i2942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2943[i + 0]) );
  }
  i2934.exitStateTransitions = i2942
  var i2945 = i2935[7]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 1) {
    i2944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2945[i + 0]) );
  }
  i2934.anyStateTransitions = i2944
  i2934.defaultStateId = i2935[8]
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2949 = data
  i2948.id = i2949[0]
  i2948.name = i2949[1]
  i2948.cycleOffset = i2949[2]
  i2948.cycleOffsetParameter = i2949[3]
  i2948.cycleOffsetParameterActive = !!i2949[4]
  i2948.mirror = !!i2949[5]
  i2948.mirrorParameter = i2949[6]
  i2948.mirrorParameterActive = !!i2949[7]
  i2948.motionId = i2949[8]
  i2948.nameHash = i2949[9]
  i2948.fullPathHash = i2949[10]
  i2948.speed = i2949[11]
  i2948.speedParameter = i2949[12]
  i2948.speedParameterActive = !!i2949[13]
  i2948.tag = i2949[14]
  i2948.tagHash = i2949[15]
  i2948.writeDefaultValues = !!i2949[16]
  var i2951 = i2949[17]
  var i2950 = []
  for(var i = 0; i < i2951.length; i += 2) {
  request.r(i2951[i + 0], i2951[i + 1], 2, i2950, '')
  }
  i2948.behaviours = i2950
  var i2953 = i2949[18]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2953[i + 0]) );
  }
  i2948.transitions = i2952
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2959 = data
  i2958.fullPath = i2959[0]
  i2958.canTransitionToSelf = !!i2959[1]
  i2958.duration = i2959[2]
  i2958.exitTime = i2959[3]
  i2958.hasExitTime = !!i2959[4]
  i2958.hasFixedDuration = !!i2959[5]
  i2958.interruptionSource = i2959[6]
  i2958.offset = i2959[7]
  i2958.orderedInterruption = !!i2959[8]
  i2958.destinationStateId = i2959[9]
  i2958.isExit = !!i2959[10]
  i2958.mute = !!i2959[11]
  i2958.solo = !!i2959[12]
  var i2961 = i2959[13]
  var i2960 = []
  for(var i = 0; i < i2961.length; i += 1) {
    i2960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2961[i + 0]) );
  }
  i2958.conditions = i2960
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2967 = data
  i2966.destinationStateId = i2967[0]
  i2966.isExit = !!i2967[1]
  i2966.mute = !!i2967[2]
  i2966.solo = !!i2967[3]
  var i2969 = i2967[4]
  var i2968 = []
  for(var i = 0; i < i2969.length; i += 1) {
    i2968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2969[i + 0]) );
  }
  i2966.conditions = i2968
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2973 = data
  i2972.defaultBool = !!i2973[0]
  i2972.defaultFloat = i2973[1]
  i2972.defaultInt = i2973[2]
  i2972.name = i2973[3]
  i2972.nameHash = i2973[4]
  i2972.type = i2973[5]
  return i2972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2975 = data
  i2974.name = i2975[0]
  i2974.bytes64 = i2975[1]
  i2974.data = i2975[2]
  return i2974
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i2976 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i2977 = data
  var i2979 = i2977[0]
  var i2978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i2979.length; i += 2) {
  request.r(i2979[i + 0], i2979[i + 1], 1, i2978, '')
  }
  i2976.components = i2978
  return i2976
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i2982 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i2983 = data
  i2982.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i2983[0], i2982.mode)
  i2982.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i2983[1], i2982.neutralHDRRangeReductionMode)
  i2982.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i2983[2], i2982.acesPreset)
  i2982.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2983[3], i2982.hueShiftAmount)
  i2982.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i2983[4], i2982.detectPaperWhite)
  i2982.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2983[5], i2982.paperWhite)
  i2982.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i2983[6], i2982.detectBrightnessLimits)
  i2982.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2983[7], i2982.minNits)
  i2982.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2983[8], i2982.maxNits)
  i2982.active = !!i2983[9]
  return i2982
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i2984 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i2985 = data
  i2984.m_Value = i2985[0]
  i2984.m_OverrideState = !!i2985[1]
  return i2984
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i2986 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i2987 = data
  i2986.m_Value = i2987[0]
  i2986.m_OverrideState = !!i2987[1]
  return i2986
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i2988 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i2989 = data
  i2988.m_Value = i2989[0]
  i2988.m_OverrideState = !!i2989[1]
  return i2988
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i2990 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i2991 = data
  i2990.m_Value = i2991[0]
  i2990.m_OverrideState = !!i2991[1]
  return i2990
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i2992 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i2993 = data
  i2992.m_Value = !!i2993[0]
  i2992.m_OverrideState = !!i2993[1]
  return i2992
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i2994 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i2995 = data
  i2994.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2995[0], i2994.skipIterations)
  i2994.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i2995[1], i2994.threshold)
  i2994.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2995[2], i2994.intensity)
  i2994.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2995[3], i2994.scatter)
  i2994.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i2995[4], i2994.clamp)
  i2994.tint = request.d('UnityEngine.Rendering.ColorParameter', i2995[5], i2994.tint)
  i2994.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i2995[6], i2994.highQualityFiltering)
  i2994.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i2995[7], i2994.downscale)
  i2994.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2995[8], i2994.maxIterations)
  i2994.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i2995[9], i2994.dirtTexture)
  i2994.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2995[10], i2994.dirtIntensity)
  i2994.active = !!i2995[11]
  return i2994
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i2996 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i2997 = data
  i2996.m_Value = i2997[0]
  i2996.m_OverrideState = !!i2997[1]
  return i2996
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i2998 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i2999 = data
  i2998.m_Value = i2999[0]
  i2998.m_OverrideState = !!i2999[1]
  return i2998
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i3000 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i3001 = data
  i3000.m_Value = new pc.Color(i3001[0], i3001[1], i3001[2], i3001[3])
  i3000.m_OverrideState = !!i3001[4]
  return i3000
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i3002 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i3003 = data
  i3002.m_Value = i3003[0]
  i3002.m_OverrideState = !!i3003[1]
  return i3002
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i3004 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i3005 = data
  i3004.dimension = i3005[0]
  request.r(i3005[1], i3005[2], 0, i3004, 'm_Value')
  i3004.m_OverrideState = !!i3005[3]
  return i3004
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i3006 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i3007 = data
  i3006.color = request.d('UnityEngine.Rendering.ColorParameter', i3007[0], i3006.color)
  i3006.center = request.d('UnityEngine.Rendering.Vector2Parameter', i3007[1], i3006.center)
  i3006.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3007[2], i3006.intensity)
  i3006.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3007[3], i3006.smoothness)
  i3006.rounded = request.d('UnityEngine.Rendering.BoolParameter', i3007[4], i3006.rounded)
  i3006.active = !!i3007[5]
  return i3006
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i3008 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i3009 = data
  i3008.m_Value = new pc.Vec2( i3009[0], i3009[1] )
  i3008.m_OverrideState = !!i3009[2]
  return i3008
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3010 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3011 = data
  i3010.useSafeMode = !!i3011[0]
  i3010.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3011[1], i3010.safeModeOptions)
  i3010.timeScale = i3011[2]
  i3010.unscaledTimeScale = i3011[3]
  i3010.useSmoothDeltaTime = !!i3011[4]
  i3010.maxSmoothUnscaledTime = i3011[5]
  i3010.rewindCallbackMode = i3011[6]
  i3010.showUnityEditorReport = !!i3011[7]
  i3010.logBehaviour = i3011[8]
  i3010.drawGizmos = !!i3011[9]
  i3010.defaultRecyclable = !!i3011[10]
  i3010.defaultAutoPlay = i3011[11]
  i3010.defaultUpdateType = i3011[12]
  i3010.defaultTimeScaleIndependent = !!i3011[13]
  i3010.defaultEaseType = i3011[14]
  i3010.defaultEaseOvershootOrAmplitude = i3011[15]
  i3010.defaultEasePeriod = i3011[16]
  i3010.defaultAutoKill = !!i3011[17]
  i3010.defaultLoopType = i3011[18]
  i3010.debugMode = !!i3011[19]
  i3010.debugStoreTargetId = !!i3011[20]
  i3010.showPreviewPanel = !!i3011[21]
  i3010.storeSettingsLocation = i3011[22]
  i3010.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3011[23], i3010.modules)
  i3010.createASMDEF = !!i3011[24]
  i3010.showPlayingTweens = !!i3011[25]
  i3010.showPausedTweens = !!i3011[26]
  return i3010
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3012 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3013 = data
  i3012.logBehaviour = i3013[0]
  i3012.nestedTweenFailureBehaviour = i3013[1]
  return i3012
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3014 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3015 = data
  i3014.showPanel = !!i3015[0]
  i3014.audioEnabled = !!i3015[1]
  i3014.physicsEnabled = !!i3015[2]
  i3014.physics2DEnabled = !!i3015[3]
  i3014.spriteEnabled = !!i3015[4]
  i3014.uiEnabled = !!i3015[5]
  i3014.textMeshProEnabled = !!i3015[6]
  i3014.tk2DEnabled = !!i3015[7]
  i3014.deAudioEnabled = !!i3015[8]
  i3014.deUnityExtendedEnabled = !!i3015[9]
  i3014.epoOutlineEnabled = !!i3015[10]
  return i3014
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3016 = root || request.c( 'TMPro.TMP_Settings' )
  var i3017 = data
  i3016.m_enableWordWrapping = !!i3017[0]
  i3016.m_enableKerning = !!i3017[1]
  i3016.m_enableExtraPadding = !!i3017[2]
  i3016.m_enableTintAllSprites = !!i3017[3]
  i3016.m_enableParseEscapeCharacters = !!i3017[4]
  i3016.m_EnableRaycastTarget = !!i3017[5]
  i3016.m_GetFontFeaturesAtRuntime = !!i3017[6]
  i3016.m_missingGlyphCharacter = i3017[7]
  i3016.m_warningsDisabled = !!i3017[8]
  request.r(i3017[9], i3017[10], 0, i3016, 'm_defaultFontAsset')
  i3016.m_defaultFontAssetPath = i3017[11]
  i3016.m_defaultFontSize = i3017[12]
  i3016.m_defaultAutoSizeMinRatio = i3017[13]
  i3016.m_defaultAutoSizeMaxRatio = i3017[14]
  i3016.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3017[15], i3017[16] )
  i3016.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3017[17], i3017[18] )
  i3016.m_autoSizeTextContainer = !!i3017[19]
  i3016.m_IsTextObjectScaleStatic = !!i3017[20]
  var i3019 = i3017[21]
  var i3018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3019.length; i += 2) {
  request.r(i3019[i + 0], i3019[i + 1], 1, i3018, '')
  }
  i3016.m_fallbackFontAssets = i3018
  i3016.m_matchMaterialPreset = !!i3017[22]
  request.r(i3017[23], i3017[24], 0, i3016, 'm_defaultSpriteAsset')
  i3016.m_defaultSpriteAssetPath = i3017[25]
  i3016.m_enableEmojiSupport = !!i3017[26]
  i3016.m_MissingCharacterSpriteUnicode = i3017[27]
  i3016.m_defaultColorGradientPresetsPath = i3017[28]
  request.r(i3017[29], i3017[30], 0, i3016, 'm_defaultStyleSheet')
  i3016.m_StyleSheetsResourcePath = i3017[31]
  request.r(i3017[32], i3017[33], 0, i3016, 'm_leadingCharacters')
  request.r(i3017[34], i3017[35], 0, i3016, 'm_followingCharacters')
  i3016.m_UseModernHangulLineBreakingRules = !!i3017[36]
  return i3016
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3022 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3023 = data
  i3022.hashCode = i3023[0]
  request.r(i3023[1], i3023[2], 0, i3022, 'material')
  i3022.materialHashCode = i3023[3]
  request.r(i3023[4], i3023[5], 0, i3022, 'atlas')
  i3022.normalStyle = i3023[6]
  i3022.normalSpacingOffset = i3023[7]
  i3022.boldStyle = i3023[8]
  i3022.boldSpacing = i3023[9]
  i3022.italicStyle = i3023[10]
  i3022.tabSize = i3023[11]
  i3022.m_Version = i3023[12]
  i3022.m_SourceFontFileGUID = i3023[13]
  request.r(i3023[14], i3023[15], 0, i3022, 'm_SourceFontFile_EditorRef')
  request.r(i3023[16], i3023[17], 0, i3022, 'm_SourceFontFile')
  i3022.m_AtlasPopulationMode = i3023[18]
  i3022.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3023[19], i3022.m_FaceInfo)
  var i3025 = i3023[20]
  var i3024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3025.length; i += 1) {
    i3024.add(request.d('UnityEngine.TextCore.Glyph', i3025[i + 0]));
  }
  i3022.m_GlyphTable = i3024
  var i3027 = i3023[21]
  var i3026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3027.length; i += 1) {
    i3026.add(request.d('TMPro.TMP_Character', i3027[i + 0]));
  }
  i3022.m_CharacterTable = i3026
  var i3029 = i3023[22]
  var i3028 = []
  for(var i = 0; i < i3029.length; i += 2) {
  request.r(i3029[i + 0], i3029[i + 1], 2, i3028, '')
  }
  i3022.m_AtlasTextures = i3028
  i3022.m_AtlasTextureIndex = i3023[23]
  i3022.m_IsMultiAtlasTexturesEnabled = !!i3023[24]
  i3022.m_ClearDynamicDataOnBuild = !!i3023[25]
  var i3031 = i3023[26]
  var i3030 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3031.length; i += 1) {
    i3030.add(request.d('UnityEngine.TextCore.GlyphRect', i3031[i + 0]));
  }
  i3022.m_UsedGlyphRects = i3030
  var i3033 = i3023[27]
  var i3032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3033.length; i += 1) {
    i3032.add(request.d('UnityEngine.TextCore.GlyphRect', i3033[i + 0]));
  }
  i3022.m_FreeGlyphRects = i3032
  i3022.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3023[28], i3022.m_fontInfo)
  i3022.m_AtlasWidth = i3023[29]
  i3022.m_AtlasHeight = i3023[30]
  i3022.m_AtlasPadding = i3023[31]
  i3022.m_AtlasRenderMode = i3023[32]
  var i3035 = i3023[33]
  var i3034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3035.length; i += 1) {
    i3034.add(request.d('TMPro.TMP_Glyph', i3035[i + 0]));
  }
  i3022.m_glyphInfoList = i3034
  i3022.m_KerningTable = request.d('TMPro.KerningTable', i3023[34], i3022.m_KerningTable)
  i3022.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3023[35], i3022.m_FontFeatureTable)
  var i3037 = i3023[36]
  var i3036 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3037.length; i += 2) {
  request.r(i3037[i + 0], i3037[i + 1], 1, i3036, '')
  }
  i3022.fallbackFontAssets = i3036
  var i3039 = i3023[37]
  var i3038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3039.length; i += 2) {
  request.r(i3039[i + 0], i3039[i + 1], 1, i3038, '')
  }
  i3022.m_FallbackFontAssetTable = i3038
  i3022.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3023[38], i3022.m_CreationSettings)
  var i3041 = i3023[39]
  var i3040 = []
  for(var i = 0; i < i3041.length; i += 1) {
    i3040.push( request.d('TMPro.TMP_FontWeightPair', i3041[i + 0]) );
  }
  i3022.m_FontWeightTable = i3040
  var i3043 = i3023[40]
  var i3042 = []
  for(var i = 0; i < i3043.length; i += 1) {
    i3042.push( request.d('TMPro.TMP_FontWeightPair', i3043[i + 0]) );
  }
  i3022.fontWeights = i3042
  return i3022
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3044 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3045 = data
  i3044.m_FaceIndex = i3045[0]
  i3044.m_FamilyName = i3045[1]
  i3044.m_StyleName = i3045[2]
  i3044.m_PointSize = i3045[3]
  i3044.m_Scale = i3045[4]
  i3044.m_UnitsPerEM = i3045[5]
  i3044.m_LineHeight = i3045[6]
  i3044.m_AscentLine = i3045[7]
  i3044.m_CapLine = i3045[8]
  i3044.m_MeanLine = i3045[9]
  i3044.m_Baseline = i3045[10]
  i3044.m_DescentLine = i3045[11]
  i3044.m_SuperscriptOffset = i3045[12]
  i3044.m_SuperscriptSize = i3045[13]
  i3044.m_SubscriptOffset = i3045[14]
  i3044.m_SubscriptSize = i3045[15]
  i3044.m_UnderlineOffset = i3045[16]
  i3044.m_UnderlineThickness = i3045[17]
  i3044.m_StrikethroughOffset = i3045[18]
  i3044.m_StrikethroughThickness = i3045[19]
  i3044.m_TabWidth = i3045[20]
  return i3044
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3048 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3049 = data
  i3048.m_Index = i3049[0]
  i3048.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3049[1], i3048.m_Metrics)
  i3048.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3049[2], i3048.m_GlyphRect)
  i3048.m_Scale = i3049[3]
  i3048.m_AtlasIndex = i3049[4]
  i3048.m_ClassDefinitionType = i3049[5]
  return i3048
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3050 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3051 = data
  i3050.m_Width = i3051[0]
  i3050.m_Height = i3051[1]
  i3050.m_HorizontalBearingX = i3051[2]
  i3050.m_HorizontalBearingY = i3051[3]
  i3050.m_HorizontalAdvance = i3051[4]
  return i3050
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3052 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3053 = data
  i3052.m_X = i3053[0]
  i3052.m_Y = i3053[1]
  i3052.m_Width = i3053[2]
  i3052.m_Height = i3053[3]
  return i3052
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3056 = root || request.c( 'TMPro.TMP_Character' )
  var i3057 = data
  i3056.m_ElementType = i3057[0]
  i3056.m_Unicode = i3057[1]
  i3056.m_GlyphIndex = i3057[2]
  i3056.m_Scale = i3057[3]
  return i3056
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3062 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3063 = data
  i3062.Name = i3063[0]
  i3062.PointSize = i3063[1]
  i3062.Scale = i3063[2]
  i3062.CharacterCount = i3063[3]
  i3062.LineHeight = i3063[4]
  i3062.Baseline = i3063[5]
  i3062.Ascender = i3063[6]
  i3062.CapHeight = i3063[7]
  i3062.Descender = i3063[8]
  i3062.CenterLine = i3063[9]
  i3062.SuperscriptOffset = i3063[10]
  i3062.SubscriptOffset = i3063[11]
  i3062.SubSize = i3063[12]
  i3062.Underline = i3063[13]
  i3062.UnderlineThickness = i3063[14]
  i3062.strikethrough = i3063[15]
  i3062.strikethroughThickness = i3063[16]
  i3062.TabWidth = i3063[17]
  i3062.Padding = i3063[18]
  i3062.AtlasWidth = i3063[19]
  i3062.AtlasHeight = i3063[20]
  return i3062
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3066 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3067 = data
  i3066.id = i3067[0]
  i3066.x = i3067[1]
  i3066.y = i3067[2]
  i3066.width = i3067[3]
  i3066.height = i3067[4]
  i3066.xOffset = i3067[5]
  i3066.yOffset = i3067[6]
  i3066.xAdvance = i3067[7]
  i3066.scale = i3067[8]
  return i3066
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3068 = root || request.c( 'TMPro.KerningTable' )
  var i3069 = data
  var i3071 = i3069[0]
  var i3070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3071.length; i += 1) {
    i3070.add(request.d('TMPro.KerningPair', i3071[i + 0]));
  }
  i3068.kerningPairs = i3070
  return i3068
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3074 = root || request.c( 'TMPro.KerningPair' )
  var i3075 = data
  i3074.xOffset = i3075[0]
  i3074.m_FirstGlyph = i3075[1]
  i3074.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3075[2], i3074.m_FirstGlyphAdjustments)
  i3074.m_SecondGlyph = i3075[3]
  i3074.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3075[4], i3074.m_SecondGlyphAdjustments)
  i3074.m_IgnoreSpacingAdjustments = !!i3075[5]
  return i3074
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3076 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3077 = data
  var i3079 = i3077[0]
  var i3078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3079.length; i += 1) {
    i3078.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3079[i + 0]));
  }
  i3076.m_GlyphPairAdjustmentRecords = i3078
  return i3076
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3082 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3083 = data
  i3082.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3083[0], i3082.m_FirstAdjustmentRecord)
  i3082.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3083[1], i3082.m_SecondAdjustmentRecord)
  i3082.m_FeatureLookupFlags = i3083[2]
  return i3082
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3084 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3085 = data
  i3084.m_GlyphIndex = i3085[0]
  i3084.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3085[1], i3084.m_GlyphValueRecord)
  return i3084
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3086 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3087 = data
  i3086.m_XPlacement = i3087[0]
  i3086.m_YPlacement = i3087[1]
  i3086.m_XAdvance = i3087[2]
  i3086.m_YAdvance = i3087[3]
  return i3086
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3088 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3089 = data
  i3088.sourceFontFileName = i3089[0]
  i3088.sourceFontFileGUID = i3089[1]
  i3088.pointSizeSamplingMode = i3089[2]
  i3088.pointSize = i3089[3]
  i3088.padding = i3089[4]
  i3088.packingMode = i3089[5]
  i3088.atlasWidth = i3089[6]
  i3088.atlasHeight = i3089[7]
  i3088.characterSetSelectionMode = i3089[8]
  i3088.characterSequence = i3089[9]
  i3088.referencedFontAssetGUID = i3089[10]
  i3088.referencedTextAssetGUID = i3089[11]
  i3088.fontStyle = i3089[12]
  i3088.fontStyleModifier = i3089[13]
  i3088.renderMode = i3089[14]
  i3088.includeFontFeatures = !!i3089[15]
  return i3088
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3092 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3093 = data
  request.r(i3093[0], i3093[1], 0, i3092, 'regularTypeface')
  request.r(i3093[2], i3093[3], 0, i3092, 'italicTypeface')
  return i3092
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3094 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3095 = data
  i3094.hashCode = i3095[0]
  request.r(i3095[1], i3095[2], 0, i3094, 'material')
  i3094.materialHashCode = i3095[3]
  request.r(i3095[4], i3095[5], 0, i3094, 'spriteSheet')
  var i3097 = i3095[6]
  var i3096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3097.length; i += 1) {
    i3096.add(request.d('TMPro.TMP_Sprite', i3097[i + 0]));
  }
  i3094.spriteInfoList = i3096
  var i3099 = i3095[7]
  var i3098 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3099.length; i += 2) {
  request.r(i3099[i + 0], i3099[i + 1], 1, i3098, '')
  }
  i3094.fallbackSpriteAssets = i3098
  i3094.m_Version = i3095[8]
  i3094.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3095[9], i3094.m_FaceInfo)
  var i3101 = i3095[10]
  var i3100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3101.length; i += 1) {
    i3100.add(request.d('TMPro.TMP_SpriteCharacter', i3101[i + 0]));
  }
  i3094.m_SpriteCharacterTable = i3100
  var i3103 = i3095[11]
  var i3102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3103.length; i += 1) {
    i3102.add(request.d('TMPro.TMP_SpriteGlyph', i3103[i + 0]));
  }
  i3094.m_SpriteGlyphTable = i3102
  return i3094
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3106 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3107 = data
  i3106.name = i3107[0]
  i3106.hashCode = i3107[1]
  i3106.unicode = i3107[2]
  i3106.pivot = new pc.Vec2( i3107[3], i3107[4] )
  request.r(i3107[5], i3107[6], 0, i3106, 'sprite')
  i3106.id = i3107[7]
  i3106.x = i3107[8]
  i3106.y = i3107[9]
  i3106.width = i3107[10]
  i3106.height = i3107[11]
  i3106.xOffset = i3107[12]
  i3106.yOffset = i3107[13]
  i3106.xAdvance = i3107[14]
  i3106.scale = i3107[15]
  return i3106
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3112 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3113 = data
  i3112.m_Name = i3113[0]
  i3112.m_HashCode = i3113[1]
  i3112.m_ElementType = i3113[2]
  i3112.m_Unicode = i3113[3]
  i3112.m_GlyphIndex = i3113[4]
  i3112.m_Scale = i3113[5]
  return i3112
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3116 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3117 = data
  request.r(i3117[0], i3117[1], 0, i3116, 'sprite')
  i3116.m_Index = i3117[2]
  i3116.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3117[3], i3116.m_Metrics)
  i3116.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3117[4], i3116.m_GlyphRect)
  i3116.m_Scale = i3117[5]
  i3116.m_AtlasIndex = i3117[6]
  i3116.m_ClassDefinitionType = i3117[7]
  return i3116
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3118 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3119 = data
  var i3121 = i3119[0]
  var i3120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3121.length; i += 1) {
    i3120.add(request.d('TMPro.TMP_Style', i3121[i + 0]));
  }
  i3118.m_StyleList = i3120
  return i3118
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3124 = root || request.c( 'TMPro.TMP_Style' )
  var i3125 = data
  i3124.m_Name = i3125[0]
  i3124.m_HashCode = i3125[1]
  i3124.m_OpeningDefinition = i3125[2]
  i3124.m_ClosingDefinition = i3125[3]
  i3124.m_OpeningTagArray = i3125[4]
  i3124.m_ClosingTagArray = i3125[5]
  i3124.m_OpeningTagUnicodeArray = i3125[6]
  i3124.m_ClosingTagUnicodeArray = i3125[7]
  return i3124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3127 = data
  var i3129 = i3127[0]
  var i3128 = []
  for(var i = 0; i < i3129.length; i += 1) {
    i3128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3129[i + 0]) );
  }
  i3126.files = i3128
  i3126.componentToPrefabIds = i3127[1]
  return i3126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3133 = data
  i3132.path = i3133[0]
  request.r(i3133[1], i3133[2], 0, i3132, 'unityObject')
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3135 = data
  var i3137 = i3135[0]
  var i3136 = []
  for(var i = 0; i < i3137.length; i += 1) {
    i3136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3137[i + 0]) );
  }
  i3134.scriptsExecutionOrder = i3136
  var i3139 = i3135[1]
  var i3138 = []
  for(var i = 0; i < i3139.length; i += 1) {
    i3138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3139[i + 0]) );
  }
  i3134.sortingLayers = i3138
  var i3141 = i3135[2]
  var i3140 = []
  for(var i = 0; i < i3141.length; i += 1) {
    i3140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3141[i + 0]) );
  }
  i3134.cullingLayers = i3140
  i3134.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3135[3], i3134.timeSettings)
  i3134.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3135[4], i3134.physicsSettings)
  i3134.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3135[5], i3134.physics2DSettings)
  i3134.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3135[6], i3134.qualitySettings)
  i3134.enableRealtimeShadows = !!i3135[7]
  i3134.enableAutoInstancing = !!i3135[8]
  i3134.enableDynamicBatching = !!i3135[9]
  i3134.lightmapEncodingQuality = i3135[10]
  i3134.desiredColorSpace = i3135[11]
  var i3143 = i3135[12]
  var i3142 = []
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.push( i3143[i + 0] );
  }
  i3134.allTags = i3142
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3147 = data
  i3146.name = i3147[0]
  i3146.value = i3147[1]
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3151 = data
  i3150.id = i3151[0]
  i3150.name = i3151[1]
  i3150.value = i3151[2]
  return i3150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3155 = data
  i3154.id = i3155[0]
  i3154.name = i3155[1]
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3157 = data
  i3156.fixedDeltaTime = i3157[0]
  i3156.maximumDeltaTime = i3157[1]
  i3156.timeScale = i3157[2]
  i3156.maximumParticleTimestep = i3157[3]
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3159 = data
  i3158.gravity = new pc.Vec3( i3159[0], i3159[1], i3159[2] )
  i3158.defaultSolverIterations = i3159[3]
  i3158.bounceThreshold = i3159[4]
  i3158.autoSyncTransforms = !!i3159[5]
  i3158.autoSimulation = !!i3159[6]
  var i3161 = i3159[7]
  var i3160 = []
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3161[i + 0]) );
  }
  i3158.collisionMatrix = i3160
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3165 = data
  i3164.enabled = !!i3165[0]
  i3164.layerId = i3165[1]
  i3164.otherLayerId = i3165[2]
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3167 = data
  request.r(i3167[0], i3167[1], 0, i3166, 'material')
  i3166.gravity = new pc.Vec2( i3167[2], i3167[3] )
  i3166.positionIterations = i3167[4]
  i3166.velocityIterations = i3167[5]
  i3166.velocityThreshold = i3167[6]
  i3166.maxLinearCorrection = i3167[7]
  i3166.maxAngularCorrection = i3167[8]
  i3166.maxTranslationSpeed = i3167[9]
  i3166.maxRotationSpeed = i3167[10]
  i3166.baumgarteScale = i3167[11]
  i3166.baumgarteTOIScale = i3167[12]
  i3166.timeToSleep = i3167[13]
  i3166.linearSleepTolerance = i3167[14]
  i3166.angularSleepTolerance = i3167[15]
  i3166.defaultContactOffset = i3167[16]
  i3166.autoSimulation = !!i3167[17]
  i3166.queriesHitTriggers = !!i3167[18]
  i3166.queriesStartInColliders = !!i3167[19]
  i3166.callbacksOnDisable = !!i3167[20]
  i3166.reuseCollisionCallbacks = !!i3167[21]
  i3166.autoSyncTransforms = !!i3167[22]
  var i3169 = i3167[23]
  var i3168 = []
  for(var i = 0; i < i3169.length; i += 1) {
    i3168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3169[i + 0]) );
  }
  i3166.collisionMatrix = i3168
  return i3166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3173 = data
  i3172.enabled = !!i3173[0]
  i3172.layerId = i3173[1]
  i3172.otherLayerId = i3173[2]
  return i3172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3175 = data
  var i3177 = i3175[0]
  var i3176 = []
  for(var i = 0; i < i3177.length; i += 1) {
    i3176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3177[i + 0]) );
  }
  i3174.qualityLevels = i3176
  var i3179 = i3175[1]
  var i3178 = []
  for(var i = 0; i < i3179.length; i += 1) {
    i3178.push( i3179[i + 0] );
  }
  i3174.names = i3178
  i3174.shadows = i3175[2]
  i3174.anisotropicFiltering = i3175[3]
  i3174.antiAliasing = i3175[4]
  i3174.lodBias = i3175[5]
  i3174.shadowCascades = i3175[6]
  i3174.shadowDistance = i3175[7]
  i3174.shadowmaskMode = i3175[8]
  i3174.shadowProjection = i3175[9]
  i3174.shadowResolution = i3175[10]
  i3174.softParticles = !!i3175[11]
  i3174.softVegetation = !!i3175[12]
  i3174.activeColorSpace = i3175[13]
  i3174.desiredColorSpace = i3175[14]
  i3174.masterTextureLimit = i3175[15]
  i3174.maxQueuedFrames = i3175[16]
  i3174.particleRaycastBudget = i3175[17]
  i3174.pixelLightCount = i3175[18]
  i3174.realtimeReflectionProbes = !!i3175[19]
  i3174.shadowCascade2Split = i3175[20]
  i3174.shadowCascade4Split = new pc.Vec3( i3175[21], i3175[22], i3175[23] )
  i3174.streamingMipmapsActive = !!i3175[24]
  i3174.vSyncCount = i3175[25]
  i3174.asyncUploadBufferSize = i3175[26]
  i3174.asyncUploadTimeSlice = i3175[27]
  i3174.billboardsFaceCameraPosition = !!i3175[28]
  i3174.shadowNearPlaneOffset = i3175[29]
  i3174.streamingMipmapsMemoryBudget = i3175[30]
  i3174.maximumLODLevel = i3175[31]
  i3174.streamingMipmapsAddAllCameras = !!i3175[32]
  i3174.streamingMipmapsMaxLevelReduction = i3175[33]
  i3174.streamingMipmapsRenderersPerFrame = i3175[34]
  i3174.resolutionScalingFixedDPIFactor = i3175[35]
  i3174.streamingMipmapsMaxFileIORequests = i3175[36]
  i3174.currentQualityLevel = i3175[37]
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3185 = data
  i3184.weight = i3185[0]
  i3184.vertices = i3185[1]
  i3184.normals = i3185[2]
  i3184.tangents = i3185[3]
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3189 = data
  i3188.mode = i3189[0]
  i3188.parameter = i3189[1]
  i3188.threshold = i3189[2]
  return i3188
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3190 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3191 = data
  i3190.xPlacement = i3191[0]
  i3190.yPlacement = i3191[1]
  i3190.xAdvance = i3191[2]
  i3190.yAdvance = i3191[3]
  return i3190
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.PlatformEffector2D":{"enabled":0,"useColliderMask":1,"colliderMask":2},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"104":[105],"106":[105],"107":[105],"108":[105],"109":[105],"110":[105],"111":[112],"113":[28],"114":[115],"116":[115],"117":[115],"118":[115],"119":[115],"120":[115],"121":[115],"122":[6],"123":[6],"124":[6],"125":[6],"126":[6],"127":[6],"128":[6],"129":[6],"130":[6],"131":[6],"132":[6],"133":[6],"134":[6],"135":[28],"136":[41],"137":[138],"139":[138],"32":[13],"8":[6],"140":[14,21,13],"73":[13],"141":[28],"31":[28],"47":[46],"142":[143],"144":[13],"145":[13],"34":[32],"16":[14,13],"146":[13],"33":[32],"56":[13],"147":[13],"80":[13],"148":[13],"60":[13],"149":[13],"55":[13],"62":[13],"150":[13],"151":[14,13],"152":[13],"61":[13],"59":[13],"153":[13],"24":[14,13],"66":[13],"154":[37],"155":[37],"38":[37],"156":[37],"157":[28],"158":[28],"159":[143],"160":[13],"161":[41,13],"162":[13,14],"163":[13],"164":[14,13],"165":[41],"166":[14,13],"167":[13],"168":[143]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","PlayerController","GameManager","UnityEngine.GameObject","UnityEngine.BoxCollider2D","UnityEngine.Shader","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.EdgeCollider2D","PlatformScript","UnityEngine.PlatformEffector2D","Shroom","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Winner","UnityEngine.UI.Text","UnityEngine.Texture2D","PauseManager","LevelGenerator","UnityEngine.Camera","UnityEngine.AudioListener","CamraFollow","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","ShelfController","UnityEngine.BoxCollider","GoodsController","PopupWordController","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","PosController","MyGameManager","MouseInputController","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "08/07/2025 09:33:10";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "hjhmoon61-naver-com";

Deserializers.lunaAppID = "31170";

Deserializers.projectId = "1ea3bb43f778449c78ecaf64beaf075a";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.Playable-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "710b894f-e8ef-4d77-81ee-7d2056cd596c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

